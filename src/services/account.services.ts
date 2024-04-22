import {SHOPIFY_CLIENT} from "../configs/shopify.config";
import { QUERY_CREATE_ACCESS_TOKEN, QUERY_CREATE_CUSTOMER } from "../constants/shopify.constant";
import { AccountRequestDto } from "../models/request/account.request.models";
import { TokenRequestDto } from "../models/request/token.request.models";
import { ErrorReponseDto } from "../models/response/error.response.models";
import { TokenResponseDto } from "../models/response/token.response.models";
import { valivadateAccessToken } from "../validators/account.validator";

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
    return await data;
}

export const createToken = async (req: any, res: any) => {
    const request: TokenRequestDto = req.tokenRequestDto || {};
    const response: TokenResponseDto = {};
    const validateAccessToken = await valivadateAccessToken(request);
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
    if(data.data.customerAccessTokenCreate.userErrors.length > 0){
        const errors: ErrorReponseDto[] = [];
        for(const value of data.data.customerAccessTokenCreate.userErrors){
            errors.push(value);
        }
        response.error = errors;
        return response;
    }
    return data.data;
}
