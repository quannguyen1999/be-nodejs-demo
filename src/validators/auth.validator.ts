import { MessageError } from "../constants/message.constant";
import { isErrorCorrect, isValueEmpty } from "../utils/function.util";
import { EMAIL, PASSWORD, REFRESH_TOKEN, TOKEN, TokenRequestDto } from "../models/request/token.request.models";
import { ErrorReponseDto } from "../models/response/error.response.models";
import { REFRESH_SECRET_JEY, REFRESH_TOKEN_LIFE, TOKEN_SECRET_JEY } from "../configs/security.config";
import { verifyToken } from "../utils/jwt.helper";

export const valivadateAccessToken = (req: TokenRequestDto) => {
    const errors: ErrorReponseDto[] = [];
    isValueEmpty(EMAIL, req.email, MessageError.EMAIL_INVALID, errors);
    isValueEmpty(PASSWORD, req.password, MessageError.PASSWORD_INVALID, errors);
    return errors;
};

export const validateRefreshToken = async (value: string) => {
    const errors: ErrorReponseDto[] = [];
    let validateRefreshToken: boolean = false;
    validateRefreshToken = isValueEmpty(REFRESH_TOKEN, value, MessageError.REFRESH_TOKEN_INVALID, errors);

    if(!validateRefreshToken){
        const decoded =  await verifyToken(value, REFRESH_SECRET_JEY);
        isErrorCorrect(REFRESH_TOKEN, decoded === undefined, MessageError.REFRESH_TOKEN_INVALID, errors);
    }

    return errors;
};

export const validateToken = async (value: string, errors: ErrorReponseDto[]) => {
    let validateRefreshToken: boolean = false;
    validateRefreshToken = isValueEmpty(TOKEN, value, MessageError.REFRESH_TOKEN_INVALID, errors);

    if(!validateRefreshToken){
        const decoded =  await verifyToken(value, TOKEN_SECRET_JEY);
        isErrorCorrect(TOKEN, decoded === undefined, MessageError.REFRESH_TOKEN_INVALID, errors);
    }

    return errors;
};


export const validateDeleteToken = (req: TokenRequestDto) => {
    const errors: ErrorReponseDto[] = [];
    isValueEmpty(TOKEN, req.token, MessageError.TOKEN_INVALID, errors);
    return errors;
};

