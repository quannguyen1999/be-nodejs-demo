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


