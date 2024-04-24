import { CommonModelResposne } from "./common.response.models"

export interface AddressResponseDto extends CommonModelResposne{
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

export const TYPE_ADDRESS_RESPONSE_DTO = `
    type AddressResponseDto {
        address1: String,
        address2: String,
        city: String,
        company: String,
        country: String,
        firstName: String,
        lastName: String,
        phone: String,
        province: String,
        zip: String,
        userErrors: [ErrorReponseDto]
        customerUserErrors: [CustomerUserError]
    }
`;