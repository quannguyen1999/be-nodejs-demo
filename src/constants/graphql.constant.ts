import { INPUT_CATEGORY_REQUEST_DTO } from "../models/request/category.request.models";
import { INPUT_TOKEN_REQUEST_DTO } from "../models/request/token.request.models";
import { TYPE_CATEGORY_RESPONE_DTO } from "../models/response/category.response.models";
import { TYPE_RESPONSE_DELETE_TOKEN_DTO } from "../models/response/delete-token-response.models";
import { TYPE_RESPOSNE_ERROR } from "../models/response/error.response.models";
import { TYPE_RESPONSE_TOKEN_DTO } from "../models/response/token.response.models";


// Define Input
export const INPUT = `
    input Map {
        field: String
        value: String
    }` 
    + INPUT_CATEGORY_REQUEST_DTO
    + INPUT_TOKEN_REQUEST_DTO;

// Define Query 
export const QUERY = `
    type Query {
        # Auth
        createToken(tokenRequestDto: TokenRequestDto!): TokenResponseDto
        deleteToken(tokenRequestDto: TokenRequestDto!): DeleteTokenResponseDto

        # Category
        listCategory(categoryRequestDto: CategoryRequestDto!): CategoryResponseDto
        createCategory(categoryRequestDto: CategoryRequestDto!): CategoryResponseDto!

        
    }
`;

// Define Scalar
export const SCALAR = `
    scalar Date
    scalar ByteArray
    scalar Double
`;

// Define Type
export const TYPE = 
TYPE_CATEGORY_RESPONE_DTO
+ TYPE_RESPOSNE_ERROR
+ TYPE_RESPONSE_TOKEN_DTO
+ TYPE_RESPONSE_DELETE_TOKEN_DTO

;
