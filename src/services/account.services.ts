import {SHOPIFY_ADMIN_CLIENT, SHOPIFY_STORE_FRONT_CLIENT} from "../configs/shopify.config";
import { QUERY_CREATE_ACCESS_TOKEN, QUERY_CREATE_CUSTOMER, QUERY_DELETE_TOKEN, QUERY_GET_LIST_ACCOUNT, QUERY_GET_LIST_PRODUCT } from "../constants/shopify.constant";
import CommonPageInfo from "../models/common-info.models";
import { AccountRequestDto } from "../models/request/account.request.models";
import { AccountResponseDto } from "../models/response/account.response.models";
import { validateListAccount } from "../validators/account.validator";


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
        response.error = validate;
        return response;
    }

    const data = await SHOPIFY_ADMIN_CLIENT.request(QUERY_GET_LIST_ACCOUNT,{
        variables: {
            after: request.after ?? null,
            first: request.first ?? 1,
            // TODO Implement later
            // before: request.before,
            // last: request.last ?? undefined
        }
    });

    const result: CommonPageInfo<AccountResponseDto> = {
        endCursor: data.data.customers.pageInfo.endCursor,
        hasNextPage: data.data.customers.pageInfo.hasNextPage,
        hasPreviousPage: data.data.customers.pageInfo.hasPreviousPage,
        startCursor: data.data.customers.pageInfo.startCursor,
        data: data.data.customers.edges.map((edge: { node: any; }) => edge.node)
    }
    return result;
}




