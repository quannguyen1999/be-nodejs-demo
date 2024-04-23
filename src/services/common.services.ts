import { ErrorReponseDto } from "../models/response/error.response.models";
import { TokenResponseDto } from "../models/response/token.response.models";

export const handlerResponse = (data: any,userErrors: any, response: any): TokenResponseDto => {
    if (userErrors.length > 0) {
        const errors: ErrorReponseDto[] = [];
        for (const value of userErrors) {
            errors.push(value);
        }
        response.error = errors;
        return response;
    }
    return data.data;
};