import { INPUT_ACCOUNT } from "../models/request/account.request.models";
import { INPUT_ADDRESS_ACCOUNT } from "../models/request/address.request.models";
import { INPUT_PRODUCT } from "../models/request/product.request.models";
import { INPUT_TOKEN_REQUEST_DTO } from "../models/request/token.request.models";
import { TYPE_ACCOUNT_RESPONSE_DTO } from "../models/response/account.response.models";
import { TYPE_ADDRESS_RESPONSE_DTO } from "../models/response/address.response.models";
import { TYPE_RESPONSE_DELETE_TOKEN_DTO } from "../models/response/delete-token-response.models";
import { TYPE_RESPOSNE_ERROR } from "../models/response/error.response.models";
import { TYPE_PRODUCT_RESPONSE_DTO } from "../models/response/product.response.models";
import { TYPE_RESPONSE_TOKEN_DTO } from "../models/response/token.response.models";


// Define Input
export const INPUT = `
    input Map {
        field: String
        value: String
    }` 
    + INPUT_TOKEN_REQUEST_DTO
    + INPUT_ACCOUNT
    + INPUT_PRODUCT
    + INPUT_ADDRESS_ACCOUNT
    ;

// Define Query 
export const QUERY = `
    type Query {
        # Account 
        listAccount(customerCreateInput: AccountRequestDto): CommonPageInfoAccount
        createAccount(accountRequestDto: AccountRequestDto): AccountResponseDto
        deleteAccount(accountRequestDto: AccountRequestDto): AccountDeleteResponseDto
        createAddress(addressRequestDto: AddressRequestDto): AddressResponseDto

        # Auth
        createToken(tokenRequestDto: TokenRequestDto!): TokenResponseDto
        deleteToken(tokenRequestDto: TokenRequestDto!): DeleteTokenResponseDto

        # Product
        listProduct(productRequestDto: ProductRequestDto!): CommonPageInfoProduct 
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
+ TYPE_PRODUCT_RESPONSE_DTO
+ TYPE_ADDRESS_RESPONSE_DTO
;
