import CategoryRequestDto from "../models/request/category.request.models";
import { MessageError } from "../constants/message.constant";
import { isErrorCorrect, isValueEmpty } from "../utils/function.util";
import { EMAIL, PASSWORD, TOKEN, TokenRequestDto } from "../models/request/token.request.models";
import { ErrorReponseDto } from "../models/response/error.response.models";
import { AccountRequestDto, FIRST } from "../models/request/account.request.models";

export const validateListAccount = (req: AccountRequestDto) => {
    const errors: ErrorReponseDto[] = [];
    validateFirst(req.first!, errors);
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
