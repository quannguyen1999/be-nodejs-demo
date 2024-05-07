import {SHOPIFY_ADMIN_CLIENT, SHOPIFY_STORE_FRONT_CLIENT} from "../configs/shopify.config";
import { QUERY_ACCESS_TOKEN, QUERY_CREATE_ACCESS_TOKEN, QUERY_CREATE_CUSTOMER, QUERY_DELETE_TOKEN, QUERY_RENEW_ACCESS_TOKEN } from "../constants/shopify.constant";
import { TokenRequestDto } from "../models/request/token.request.models";
import { TokenResponseDto } from "../models/response/token.response.models";
import { validateDeleteToken, validateRefreshToken, valivadateAccessToken } from "../validators/auth.validator";
import { handlerCommonDtoInfo } from "./common.services";
import { encryptPassword, generateToken, getTokenShopifyFromRefreshToken, getTokenShopifyFromToken } from "../utils/jwt.helper";
import { REFRESH_SECRET_JEY, REFRESH_TOKEN_LIFE, SHOPIFY_SECRET_KEY, SYSTEM_USERNAME, TOKEN_LIFE, TOKEN_SECRET_JEY } from "../configs/security.config";

export const createToken = async (req: any, res: any) => {
    const request: TokenRequestDto = req.tokenRequestDto || {};
    const response: TokenResponseDto = {};
    const validateAccessToken = valivadateAccessToken(request);
    if(validateAccessToken.length > 0){
        response.userErrors = validateAccessToken;
        return response;
    }

    if(request.email == SYSTEM_USERNAME){
        return handlerToken(SHOPIFY_SECRET_KEY);
    }

    const data = await SHOPIFY_STORE_FRONT_CLIENT.request(QUERY_CREATE_ACCESS_TOKEN, {
        variables: {
            input: {
                email: request.email,
                password: request.password               
            }
        },
    });
    
    const dataMap = await handlerCommonDtoInfo(data.data.customerAccessTokenCreate.customerAccessToken, data.data.customerAccessTokenCreate.userErrors);
    if(dataMap?.userErrors != undefined && dataMap.userErrors.length > 0){
        return dataMap;
    }

    return handlerToken(dataMap.accessToken);
}

const handlerToken = async (data: string) => {
    return {
        accessToken: generateToken(encryptPassword(data), TOKEN_LIFE, TOKEN_SECRET_JEY),
        refreshToken: generateToken(encryptPassword(data), REFRESH_TOKEN_LIFE, REFRESH_SECRET_JEY),
    }
}

const handlerRefreshToken = async (data: string, refreshToken: string) => {
    return {
        accessToken: generateToken(encryptPassword(data), TOKEN_LIFE, TOKEN_SECRET_JEY),
        refreshToken: refreshToken,
    }
}

export const refreshToken = async (req: any, res: any) => {
    const request: TokenRequestDto = req.tokenRequestDto || {};
    const response: TokenResponseDto = {};
    const validateAccessToken = await validateRefreshToken(request.refreshToken);
    if(validateAccessToken.length > 0){
        response.userErrors = validateAccessToken;
        return response;
    }

    const dataInRefreshToken = await getTokenShopifyFromRefreshToken(request.refreshToken);
    if(dataInRefreshToken == SHOPIFY_SECRET_KEY){
        return handlerRefreshToken(SHOPIFY_SECRET_KEY, request.refreshToken);
    }

    const data = await SHOPIFY_STORE_FRONT_CLIENT.request(QUERY_RENEW_ACCESS_TOKEN, {
        variables: {
            customerAccessToken:  await getTokenShopifyFromToken(request.refreshToken)
        },
    });

    const dataMap = await handlerCommonDtoInfo(data.data.customerAccessTokenRenew.customerAccessToken, data.data.customerAccessTokenRenew.userErrors);
    if(dataMap?.userErrors != undefined && dataMap.userErrors.length > 0){
        return dataMap;
    }

    return handlerRefreshToken(dataMap.accessToken, request.refreshToken);
}

export const deleteToken = async (req: any, res: any) => {
    const request: TokenRequestDto = req.tokenRequestDto || {};
    const response: TokenResponseDto = {};
    
    const validate = validateDeleteToken(request);
    if(validate.length > 0){
        response.userErrors = validate;
        return response;
    }

    const data = await SHOPIFY_STORE_FRONT_CLIENT.request(QUERY_DELETE_TOKEN, {
        variables: {
            customerAccessToken: request.token
        },
    })
    return handlerCommonDtoInfo(data.data.customerAccessTokenDelete, data.data.customerAccessTokenDelete.userErrors);
}

export const getAccessScope = async(req: any, res:any) => {
    return await SHOPIFY_ADMIN_CLIENT.request(QUERY_ACCESS_TOKEN,{
        variables: {},
        headers: {
            'X-Shopify-Access-Token': req.query.customerAccessToken!
        } 
    });;
}

export const activeAccount = async (req: any, res: any) => {
    // TODO Implement later
}

