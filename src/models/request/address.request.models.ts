import { CommonModelRequest, INPUT_COMMON_MODEL_REQUEST } from "./common.request.models";

export interface AddressRequestDto extends CommonModelRequest {
    address1?: string,
    address2?: string,
    city?: string,
    company?: string,
    country?: string,
    firstName?: string,
    lastName?: string,
    phone?: string,
    province?: string,
    zip?: string
}   

export const INPUT_ADDRESS_ACCOUNT = `
  input AddressRequestDto {
    address1: String
    address2: String
    city: String
    company: String
    country: String
    firstName: String
    lastName: String
    phone: String
    province: String
    zip: String
    ` + INPUT_COMMON_MODEL_REQUEST + `
  }
`;

export const ADDRESS_1 = "address1";
export const ADDRESS_2 = "address2";
export const ADDRESS_CITY = "city";
export const ADDRESS_COMPANY = "company";
export const ADDRESS_COUNTRY = "country";
export const ADDRESS_FIRST_NAME = "firstName";
export const ADDRESS_LAST_NAME = "lastName";
export const ADDRESS_PHONE = "phone";
export const ADDRESS_PROVINCE = "province";
export const ADDRESS_ZIP = "zip";

