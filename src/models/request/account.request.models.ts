import { CommonModelRequest, INPUT_COMMON_MODEL_REQUEST } from "./common.request.models";

export interface AccountRequestDto extends CommonModelRequest {
    id?: string,
    email?: string,
    firstName?: string,
    lastName?: string,
    phone?: string,
    password?: string,
    capcha?: string,
}   

export const INPUT_ACCOUNT = `
  input AccountRequestDto {
    id: String
    acceptsMarketing: Boolean
    email: String
    firstName: String
    lastName: String
    password: String
    phone: String
    ` + INPUT_COMMON_MODEL_REQUEST + `
  }
`;

export const ACCOUNT_ID = "id";
export const ACCOUNT_ACCEPT_MARKETING = "acceptsMarketing";
export const ACCOUNT_EMAIL = "email";
export const ACCOUNT_FIRST_NAME = "firstName";
export const ACCOUNT_LAST_NAME = "lastName";
export const ACCOUNT_PASSWORD = "password";
export const ACCOUNT_PHONE = "phone";

