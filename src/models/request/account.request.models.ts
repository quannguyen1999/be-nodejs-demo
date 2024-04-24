import { CommonModelRequest } from "./common.request.models";

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
    after: String,
    before: String,
    first: Int,
    last: Int 
  }
`;

export const ID = "id";
export const FIRST = "first";
export const BEFORE = "before";
export const AFTER = "after";
export const LAST = "last";
