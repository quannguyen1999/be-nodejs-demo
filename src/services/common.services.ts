import { CUSTOMER_ACCESS_TOKEN } from "../models/request/common.request.models";
import { CustomerUserError, ErrorReponseDto } from "../models/response/error.response.models";
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
    const response: any = {};
    if(data.errors != null){
        const mapUserErrors: ErrorReponseDto[] = [];
        mapUserErrors.push({
            field: CUSTOMER_ACCESS_TOKEN,
            message: data.errors.message
        })
        response.userErrors = mapUserErrors;
        return response;
    }
    return {
        endCursor: data.pageInfo.endCursor,
        hasNextPage: data.pageInfo.hasNextPage,
        hasPreviousPage:data.pageInfo.hasPreviousPage,
        startCursor: data.pageInfo.startCursor,
        data: data.edges.map((edge: { node: any; }) => edge.node)
    };
} 

export const handlerCommonDtoInfo = async (data: any, userErrors: any) => {
    const mapData: any = data || {};
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

export const handlerCustomerErrorDtoInfo = async (data: any, customerUserErrors: any) => {
    
    const mapData: any = data || {};
    if(customerUserErrors != undefined && customerUserErrors.length > 0){
        const mapUserErrors: CustomerUserError[] = [];
        for(const value of customerUserErrors){
            mapUserErrors.push({
                code: value.code,
                field: value.field,
                message: value.message
            })
        }
        mapData.customerUserErrors = mapUserErrors;
    }
    return mapData;
} 

export const buildInputObject = (dto: any) => {
    const input:  Record<string, any> = {};
    for (const key in dto) {
        if (dto[key] !== null && dto[key] !== undefined && key != CUSTOMER_ACCESS_TOKEN) {
            input[key] = dto[key];
        }
    }
    return input;
}
