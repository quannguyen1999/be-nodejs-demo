import { INPUT_ACCOUNT_REQUEST_MODEL } from "../models/request/account.request.models";
import { INPUT_CATEGORY_REQUEST_DTO } from "../models/request/category.request.models";
import { INPUT_LOGIN_REQUEST_MODAL } from "../models/request/login.request.models";
import { INPUT_REFRESH_TOKEN_DTO } from "../models/request/refresh-token.request.models";
import { TYPE_ACCOUNT_RESPONSE_DTO } from "../models/response/account.response.models";
import { TYPE_CATEGORY_RESPONE_DTO } from "../models/response/category.response.models";
import { TYPE_LOGIN_REQUEST_MODAL } from "../models/response/login.response.modals";

// Define Input
export const INPUT = `
    input Map {
        field: String
        value: String
    }` 
    + INPUT_ACCOUNT_REQUEST_MODEL 
    + INPUT_CATEGORY_REQUEST_DTO
    + INPUT_LOGIN_REQUEST_MODAL
    + INPUT_REFRESH_TOKEN_DTO
    ;

// Define Query 
export const QUERY = `
    type Query {
        # Auth
        requestToken(loginRequestDto: LoginRequestDto!): LoginResponseDto
        refreshToken(refreshTokenDto: RefreshTokenDto!): LoginResponseDto

        # Account
        listAccount(accountRequestDto: AccountRequestDto!): CommonPageInfoAccount
        exportAccount(accountRequestDto: AccountRequestDto!): ByteArray

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
export const TYPE = TYPE_ACCOUNT_RESPONSE_DTO 
+ TYPE_CATEGORY_RESPONE_DTO
+ TYPE_LOGIN_REQUEST_MODAL;
