import { CommonModelResposne } from "./common.response.models"

export interface AccountResponseDto extends CommonModelResposne{
    id?: string
    email?: string
    firstName?: string
    lastName?: string
    verifiedEmail?: boolean
}   

export const TYPE_ACCOUNT_RESPONSE_DTO = `
    type AccountResponseDto {
        id: String
        email: String
        firstName: String 
        lastName: String
        verifiedEmail: Boolean
    }

    type AccountDeleteResponseDto {
        deletedCustomerId: String
        userErrors: [ErrorReponseDto]
    }

    type CommonPageInfoAccount {
        endCursor: String
        hasNextPage: String
        hasPreviousPage: String
        startCursor: String
        userErrors: [ErrorReponseDto]
        data: [AccountResponseDto]
    }
`;