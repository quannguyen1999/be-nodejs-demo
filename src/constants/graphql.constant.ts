import { INPUT_ACCOUNT } from "../models/request/account.request.models";
import { INPUT_TOKEN_REQUEST_DTO } from "../models/request/token.request.models";
import { TYPE_ACCOUNT_RESPONSE_DTO } from "../models/response/account.response.models";
import { TYPE_RESPONSE_DELETE_TOKEN_DTO } from "../models/response/delete-token-response.models";
import { TYPE_RESPOSNE_ERROR } from "../models/response/error.response.models";
import { TYPE_RESPONSE_TOKEN_DTO } from "../models/response/token.response.models";


// Define Input
export const INPUT = `
    input Map {
        field: String
        value: String
    }` 
    + INPUT_TOKEN_REQUEST_DTO
    + INPUT_ACCOUNT;

// Define Query 
export const QUERY = `
    type Query {
        # Account 
        listAccount(customerCreateInput: CustomerCreateInput): CommonPageInfoAccount

        # Auth
        createToken(tokenRequestDto: TokenRequestDto!): TokenResponseDto
        deleteToken(tokenRequestDto: TokenRequestDto!): DeleteTokenResponseDto
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
TYPE_RESPOSNE_ERROR
+ TYPE_RESPONSE_TOKEN_DTO
+ TYPE_RESPONSE_DELETE_TOKEN_DTO
+ TYPE_ACCOUNT_RESPONSE_DTO

;
