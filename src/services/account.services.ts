import {SHOPIFY_ADMIN_CLIENT, SHOPIFY_STORE_FRONT_CLIENT} from "../configs/shopify.config";
import {  QUERY_CREATE_CUSTOMER, QUERY_DELETE_CUSTOMER, QUERY_GET_LIST_ACCOUNT } from "../constants/shopify.constant";
import { AccountRequestDto } from "../models/request/account.request.models";
import { AccountResponseDto } from "../models/response/account.response.models";
import { ErrorReponseDto } from "../models/response/error.response.models";
import { valdiateDeleteAccount, validateListAccount } from "../validators/account.validator";
import { validateDeleteToken } from "../validators/auth.validator";
import { handlerCommonDtoInfo, handlerCommonPageInfo } from "./common.services";

export const createAccount = async (req: any, res: any) => {
    const accountRequestDto: AccountRequestDto = req.accountRequestDto;
    const data = await SHOPIFY_STORE_FRONT_CLIENT.request(QUERY_CREATE_CUSTOMER, {
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

export const listAccount = async (req: any, res: any) => {
    const request: AccountRequestDto = req.customerCreateInput || {};
    const response: AccountResponseDto = {};
    const validate = validateListAccount(request);
    if(validate.length > 0){
        response.userErrors = validate;
        return response;
    }

    const data = await SHOPIFY_ADMIN_CLIENT.request(QUERY_GET_LIST_ACCOUNT,{
        variables: {
            after: request.after ?? null,
            first: request.first ?? 1
        }
    });
    return handlerCommonPageInfo(data.data.customers);
}

export const deleteAccount = async (req: any, res: any) => {
    const request: AccountRequestDto = req.accountRequestDto || {};
    const response: AccountResponseDto = {};
    const validate = valdiateDeleteAccount(request);
    if(validate.length > 0){
        response.userErrors = validate;
        return response;
    }

    const data = await SHOPIFY_ADMIN_CLIENT.request(QUERY_DELETE_CUSTOMER,{
        variables: {
            input: {
                id: request.id,
            }
        }
    });
    return handlerCommonDtoInfo(data.data.customerDelete);
}

export const checkoutCreate = async (req: any, res: any) => {
    
    return {
        data: ""
    }
}



