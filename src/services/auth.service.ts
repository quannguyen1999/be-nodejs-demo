import { ClientResponse } from "@shopify/graphql-client";
import {SHOPIFY_STORE_FRONT_CLIENT} from "../configs/shopify.config";
import { QUERY_CREATE_ACCESS_TOKEN, QUERY_CREATE_CUSTOMER, QUERY_DELETE_TOKEN } from "../constants/shopify.constant";
import { AccountRequestDto } from "../models/request/account.request.models";
import { TokenRequestDto } from "../models/request/token.request.models";
import { TokenResponseDto } from "../models/response/token.response.models";
import { validateDeleteToken, valivadateAccessToken } from "../validators/auth.validator";
import { handlerCommonDtoInfo } from "./common.services";

export const createToken = async (req: any, res: any) => {
    const request: TokenRequestDto = req.tokenRequestDto || {};
    const response: TokenResponseDto = {};
    const validateAccessToken = valivadateAccessToken(request);
    if(validateAccessToken.length > 0){
        response.userErrors = validateAccessToken;
        return response;
    }

    const data = await SHOPIFY_STORE_FRONT_CLIENT.request(QUERY_CREATE_ACCESS_TOKEN, {
        variables: {
            input: {
                email: request.email,
                password: request.password               
            }
        },
    });
    return handlerCommonDtoInfo(data.data.customerAccessTokenCreate.customerAccessToken, data.data.customerAccessTokenCreate.userErrors);
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

export const activeAccount = async (req: any, res: any) => {
    // TODO Implement later
    // const request: TokenRequestDto = req.tokenRequestDto || {};
    // const response: TokenResponseDto = {};
    
    // const validate = validateDeleteToken(request);
    // if(validate.length > 0){
    //     response.userErrors = validate;
    //     return response;
    // }

    // const data = await SHOPIFY_STORE_FRONT_CLIENT.request(QUERY_DELETE_TOKEN, {
    //     variables: {
    //         token: request.token
    //     },
    // })
    // return handlerResponse(data, data.data.customerAccessTokenCreate.userErrors, response);
}