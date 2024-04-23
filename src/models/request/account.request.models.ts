import { CommonModelRequest } from "./common.request.models";

export interface AccountRequestDto extends CommonModelRequest {
    id?: string,
    email?: string,
    firstName?: string,
    lastName?: string,
    phone?: string,
    password?: string,
    capcha?: string,

    after?: string,
    before?: string,
    first?: number,
    last?: number 
}   

export const INPUT_ACCOUNT = `
  input CustomerCreateInput {
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

export const FIRST = "first";
export const BEFORE = "before";
export const AFTER = "after";
export const LAST = "last";
