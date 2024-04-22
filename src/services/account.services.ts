import {SHOPIFY_CLIENT} from "../configs/shopify.config";
import { QUERY_CREATE_ACCESS_TOKEN, QUERY_CREATE_CUSTOMER } from "../constants/shopify.constant";
import { AccountRequestDto } from "../models/request/account.request.models";
import { TokenRequestDto } from "../models/request/token.request.models";

export const createAccount = async (req: any, res: any) => {
    const accountRequestDto: AccountRequestDto = req.body.accountRequestDto;
    const data = await SHOPIFY_CLIENT.request(QUERY_CREATE_CUSTOMER, {
        variables: {
            input: {
                email: accountRequestDto.email! ,
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
    const tokenRequestDto: TokenRequestDto = req.body.TokenRequestDto;
    const data = await SHOPIFY_CLIENT.request(QUERY_CREATE_ACCESS_TOKEN, {
        variables: {
            input: {
                email: tokenRequestDto.email,
                password: tokenRequestDto.password               
            }
        },
      })
    return await data;
}
