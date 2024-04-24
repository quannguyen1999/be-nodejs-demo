import { MessageError } from "../constants/message.constant";
import { FIRST } from "../models/request/common.request.models";
import { ProductRequestDto } from "../models/request/product.request.models";
import { ErrorReponseDto } from "../models/response/error.response.models";
import { isErrorCorrect, isValueEmpty } from "../utils/function.util";


export const validateListProduct = (req: ProductRequestDto) => {
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
