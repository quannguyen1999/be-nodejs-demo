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

export const handlerCommonDtoInfo = async (data: any, userErrors: any) => {
    const mapData: any = data;
    if(userErrors != undefined && userErrors.length > 0){
        const mapUserErrors: ErrorReponseDto[] = [];
        for(const value of userErrors){
            mapUserErrors.push({
                field: value.field[0],
                message: value.message
            })
        }
        mapData.userErrors = mapUserErrors;
    }
    return mapData;
} 

export const buildInputObject = (dto: any) => {
    const input:  Record<string, any> = {};
    for (const key in dto) {
        if (dto[key] !== null && dto[key] !== undefined) {
            input[key] = dto[key];
        }
    }
    return input;
}
