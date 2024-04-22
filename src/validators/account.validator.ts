import CategoryRequestDto from "../models/request/category.request.models";
import { MessageError } from "../constants/message.constant";
import { isValueEmpty } from "../utils/function.util";
import { EMAIL, PASSWORD, TokenRequestDto } from "../models/request/token.request.models";
import { ErrorReponseDto } from "../models/response/error.response.models";

export const valivadateAccessToken = (req: TokenRequestDto) => {
    const errors: ErrorReponseDto[] = [];
    isValueEmpty(EMAIL, req.email, MessageError.EMAIL_INVALID, errors);
    isValueEmpty(PASSWORD, req.password, MessageError.PASSWORD_INVALID, errors);
    return errors;
};

