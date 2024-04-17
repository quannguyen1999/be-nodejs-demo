import validator from "validator";
import { MessageError } from "../constants/message.constant";

export const isValueEmpty = (req: string | undefined, message: MessageError) => {
    if(req == undefined || validator.isEmpty(req)){
        badRequest(message);
    }
}

export const badRequest = (req: MessageError) => {
    throw new Error(MessageError[req]);
}

export const isEmpty = (req: Object) => {
    const errors = [];
    if(req == null){
        errors.push({message: MessageError.OBJECT_IS_NULL})
        throw errors;
    }
}