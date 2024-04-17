import validator from "validator";
import { MessageError } from "../constants/message.constant";
import jwt from "jsonwebtoken";
import { handlerCommonToken } from "../services/auth.service";

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

export const isValueEmpty = (req: string | undefined, message: MessageError) => {
    if(req == undefined || validator.isEmpty(req)){
        throwError(message);
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