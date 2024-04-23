import validator from "validator";
import { MessageError } from "../constants/message.constant";
import jwt from "jsonwebtoken";
import { ErrorReponseDto } from "../models/response/error.response.models";
// import { handlerCommonToken } from "../services/auth.service";

export const handlerQuery = async (isCount: boolean, query: string) => {
    return isCount ? `SELECT count(*) as total FROM (` + query + ` )` : query;
};

export const getCurrentUserName = (value: string) => {
    let decodedToken = jwt.verify(value, process.env.TOKEN_SECRET!);
    if(!decodedToken){
        throwError(MessageError.UNAUTHORIZED);
    }
    return JSON.parse(JSON.stringify(decodedToken)).username;
}

export const isValueEmpty = (field: string, value: string | undefined, message: MessageError, errors: ErrorReponseDto[]) => {
    if(value == undefined || validator.isEmpty(value)){
        const error: ErrorReponseDto = {
            field: field,
            message: new Error(MessageError[message]).message
        }
        errors.push(error);
        return true;
    }
    return false;
}

export const isErrorCorrect = (field: string, result: boolean, message: MessageError, errors: ErrorReponseDto[]) => {
    if(result){
        const error: ErrorReponseDto = {
            field: field,
            message: new Error(MessageError[message]).message
        }
        errors.push(error);
    }
}




export const throwError = (req: MessageError) => {
    throw new Error(MessageError[req]);
}

export const isEmpty = (req: Object) => {
    const errors = [];
    if(req == null){
        errors.push({message: MessageError.OBJECT_IS_NULL})
        throw errors;
    }
}