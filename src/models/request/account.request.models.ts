import { CommonModelRequest } from "./common.request.models";

export interface AccountRequestDto extends CommonModelRequest {
    id?: string,
    email?: string,
    firstName?: string,
    lastName?: string,
    phone?: string,
    password?: string,
    capcha?: string
}   

export const INPUT_ACCOUNT_CREATE = `
  input CustomerCreateInput {
    acceptsMarketing: Boolean
    email: String!
    firstName: String
    lastName: String
    password: String!
    phone: String
  }
`;