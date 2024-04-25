import { TOKEN_SECRET_JEY } from "../configs/security.config";
import {SHOPIFY_ADMIN_CLIENT, SHOPIFY_STORE_FRONT_CLIENT} from "../configs/shopify.config";
import {  QUERY_CREATE_CUSTOMER, QUERY_CUSTOMER_ADDRESS_CREATE, QUERY_DELETE_CUSTOMER, QUERY_GET_LIST_ACCOUNT } from "../constants/shopify.constant";
import { AccountRequestDto } from "../models/request/account.request.models";
import { AddressRequestDto } from "../models/request/address.request.models";
import { AccountResponseDto } from "../models/response/account.response.models";
import { AddressResponseDto } from "../models/response/address.response.models";
import { ErrorReponseDto } from "../models/response/error.response.models";
import { decryptPassword, encryptPassword, getTokenShopifyFromToken, verifyToken } from "../utils/jwt.helper";
import { valdiateDeleteAccount, validateCreateAccount, validateCreateAddress, validateListAccount } from "../validators/account.validator";
import { validateDeleteToken } from "../validators/auth.validator";
import { buildInputObject, handlerCommonDtoInfo, handlerCommonPageInfo } from "./common.services";

export const createAccount = async (req: any, res: any) => {
    const request: AccountRequestDto = req.accountRequestDto || {};
    const response: AccountResponseDto = {};
    const validate = validateCreateAccount(request);
    if(validate.length > 0){
        response.userErrors = validate;
        return response;
    }

    const data = await SHOPIFY_STORE_FRONT_CLIENT.request(QUERY_CREATE_CUSTOMER, {
        variables: {
            input: buildInputObject(request)
        },
    })

    return handlerCommonDtoInfo(data.data.customerCreate.customer, data.data.customerCreate.userErrors);
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
    return handlerCommonDtoInfo(data.data.customerDelete, data.data.customerDelete.userErrors);
}

export const createAddress = async (req: any, res: any) => {
    const request: AddressRequestDto = req.addressRequestDtoToken.addressRequestDto || {};
    const response: AccountResponseDto = {};
    const validate = validateCreateAddress(request, req.addressRequestDtoToken.customerAccessToken);
    if(validate.length > 0){
        response.userErrors = validate;
        return response;
    }

    const data = await SHOPIFY_STORE_FRONT_CLIENT.request(QUERY_CUSTOMER_ADDRESS_CREATE, {
        variables: {
            address: buildInputObject(request),
            customerAccessToken: getTokenShopifyFromToken(req.addressRequestDtoToken.customerAccessToken)
        },
    })

    //TODO need fix bug customerUserError return null
    return  data.data.customerAddressCreate  == undefined ? {} : handlerCommonDtoInfo(data.data.customerAddressCreate?.customerAddress,  data.data.customerAddressCreate.userErrors);
}

