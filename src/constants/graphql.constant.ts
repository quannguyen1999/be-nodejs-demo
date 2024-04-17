import { INPUT_ACCOUNT_REQUEST_MODEL } from "../models/request/account.request.models";
import { INPUT_CATEGORY_REQUEST_DTO } from "../models/request/category.request.models";
import { TYPE_ACCOUNT_RESPONSE_DTO } from "../models/response/account.response.models";
import { TYPE_CATEGORY_RESPONE_DTO } from "../models/response/category.response.models";

// Define Input
export const INPUT = `
    input Map {
        field: String
        value: String
    }` 
    + INPUT_ACCOUNT_REQUEST_MODEL 
    + INPUT_CATEGORY_REQUEST_DTO;

// Define Query 
export const QUERY = `
    type Query {
        #    Account
        listAccount(accountRequestDto: AccountRequestDto!): CommonPageInfoAccount
        exportAccount(accountRequestDto: AccountRequestDto!): ByteArray

        #    Category
        listCategory(categoryRequestDto: CategoryRequestDto!): CommonPageInfoCategory
    }
`;

// Define Scalar
export const SCALAR = `
    scalar Date
    scalar ByteArray
    scalar Double
`;

// Define Type
export const TYPE = TYPE_ACCOUNT_RESPONSE_DTO + TYPE_CATEGORY_RESPONE_DTO;
