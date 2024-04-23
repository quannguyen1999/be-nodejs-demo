import { CommonModelResposne } from "./common.response.models"

export interface ProductResponseDto extends CommonModelResposne{
    id?: string
    title?: string
    handler?: string
    createdAt?: string
    description?: string
}   

export const TYPE_PRODUCT_RESPONSE_DTO = `
    type ProductResponseDto {
        id: String
        title: String
        handler: String 
        createdAt: String
        description: String 
    }

    type CommonPageInfoProduct {
        endCursor: String
        hasNextPage: String
        hasPreviousPage: String
        startCursor: String
        error: [ErrorReponseDto]
        data: [ProductResponseDto]
    }
`;