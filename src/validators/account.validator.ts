import { MessageError } from "../constants/message.constant";
import { isErrorCorrect, isValueEmpty } from "../utils/function.util";
import { ErrorReponseDto } from "../models/response/error.response.models";
import { ACCOUNT_EMAIL, ACCOUNT_FIRST_NAME, ACCOUNT_ID, ACCOUNT_LAST_NAME, ACCOUNT_PASSWORD, ACCOUNT_PHONE, AccountRequestDto } from "../models/request/account.request.models";
import { AddressRequestDto } from "../models/request/address.request.models";
import { CUSTOMER_ACCESS_TOKEN, FIRST } from "../models/request/common.request.models";
import { validateToken } from "./auth.validator";

export const validateCreateAccount = (req: AccountRequestDto) => {
    const errors: ErrorReponseDto[] = [];
    isValueEmpty(ACCOUNT_EMAIL, req.email, MessageError.FIRST_INVALID, errors);
    isValueEmpty(ACCOUNT_FIRST_NAME, req.firstName, MessageError.FIRST_NAME_INVALID, errors);
    isValueEmpty(ACCOUNT_LAST_NAME, req.lastName, MessageError.LAST_NAME_INVALID, errors);
    isValueEmpty(ACCOUNT_PASSWORD, req.password, MessageError.PASSWORD_INVALID, errors);
    isValueEmpty(ACCOUNT_PHONE, req.phone, MessageError.PHONE_INVALID, errors);
    return errors;
};


export const validateListAccount = (req: AccountRequestDto) => {
    const errors: ErrorReponseDto[] = [];
    validateFirst(req.first!, errors);
    isValueEmpty(CUSTOMER_ACCESS_TOKEN, req.customerAccessToken, MessageError.CUSTOMER_ACCESS_TOKEN_INVALID, errors);
    return errors;
};

export const valdiateDeleteAccount = (req: AccountRequestDto) => {
    const errors: ErrorReponseDto[] = [];
    isValueEmpty(ACCOUNT_ID, req.id, MessageError.FIRST_INVALID, errors);
    isValueEmpty(CUSTOMER_ACCESS_TOKEN, req.customerAccessToken, MessageError.CUSTOMER_ACCESS_TOKEN_INVALID, errors);
    return errors;
};

export const validateCreateAddress = (req: AddressRequestDto, token: string) => {
    const errors: ErrorReponseDto[] = [];
    validateToken(token, errors);
    return errors;
};

const validateFirst = (value: number, errors: ErrorReponseDto[]) => {
    let validateFirst: boolean = false;
    
    //validate first
    validateFirst = isValueEmpty(FIRST, value?.toString(), MessageError.FIRST_INVALID, errors);

    if(!validateFirst){
        isErrorCorrect(FIRST, value != undefined && value > 20, MessageError.FIRST_INVALID, errors);
    }

}
