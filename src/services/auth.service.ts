import {SHOPIFY_CLIENT} from "../configs/shopify.config";
import { QUERY_CREATE_ACCESS_TOKEN, QUERY_CREATE_CUSTOMER, QUERY_DELETE_TOKEN } from "../constants/shopify.constant";
import { AccountRequestDto } from "../models/request/account.request.models";
import { TokenRequestDto } from "../models/request/token.request.models";
import { TokenResponseDto } from "../models/response/token.response.models";
import { validateDeleteToken, valivadateAccessToken } from "../validators/account.validator";
import { handlerResponse } from "./common.services";

export const createAccount = async (req: any, res: any) => {
    const accountRequestDto: AccountRequestDto = req.body.accountRequestDto;
    const data = await SHOPIFY_CLIENT.request(QUERY_CREATE_CUSTOMER, {
        variables: {
            input: {
                email: accountRequestDto.email!,
                firstName: accountRequestDto.firstName!,
                lastName: accountRequestDto.lastName!,
                phone: accountRequestDto.phone!,
                password: accountRequestDto.password!
            }
        },
      })
    return data;
}

export const createToken = async (req: any, res: any) => {
    const request: TokenRequestDto = req.tokenRequestDto || {};
    const response: TokenResponseDto = {};
    const validateAccessToken = valivadateAccessToken(request);
    if(validateAccessToken.length > 0){
        response.error = validateAccessToken;
        return response;
    }

    const data = await SHOPIFY_CLIENT.request(QUERY_CREATE_ACCESS_TOKEN, {
        variables: {
            input: {
                email: request.email,
                password: request.password               
            }
        },
    })
    return handlerResponse(data, data.data.customerAccessTokenCreate.userErrors, response);
}

export const deleteToken = async (req: any, res: any) => {
    const request: TokenRequestDto = req.tokenRequestDto || {};
    const response: TokenResponseDto = {};
    
    const validate = validateDeleteToken(request);
    if(validate.length > 0){
        response.error = validate;
        return response;
    }

    const data = await SHOPIFY_CLIENT.request(QUERY_DELETE_TOKEN, {
        variables: {
            token: request.token
        },
    })
    return handlerResponse(data, data.data.customerAccessTokenCreate.userErrors, response);
}

export const activeAccount = async (req: any, res: any) => {
    const request: TokenRequestDto = req.tokenRequestDto || {};
    const response: TokenResponseDto = {};
    
    const validate = validateDeleteToken(request);
    if(validate.length > 0){
        response.error = validate;
        return response;
    }

    const data = await SHOPIFY_CLIENT.request(QUERY_DELETE_TOKEN, {
        variables: {
            token: request.token
        },
    })
    return handlerResponse(data, data.data.customerAccessTokenCreate.userErrors, response);
}
