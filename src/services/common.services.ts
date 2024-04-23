import { ErrorReponseDto } from "../models/response/error.response.models";
import { TokenResponseDto } from "../models/response/token.response.models";

export const handlerErrorResponse = (data: any,userErrors: any, response: any): TokenResponseDto => {
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

export const handlerCommonPageInfo = async (data: any) => {
    return {
        endCursor: data.pageInfo.endCursor,
        hasNextPage: data.pageInfo.hasNextPage,
        hasPreviousPage:data.pageInfo.hasPreviousPage,
        startCursor: data.pageInfo.startCursor,
        data: data.edges.map((edge: { node: any; }) => edge.node)
    };
} 
