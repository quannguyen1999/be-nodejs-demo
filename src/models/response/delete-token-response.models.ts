import { CommonModelResposne, TYPE_COMMON_MODEL_RESPONSE } from "./common.response.models";

export interface DeleteTokenResponseDto extends CommonModelResposne{
    deletedAccessToken: string,
    deletedCustomerAccessTokenId: string
}   

export const TYPE_RESPONSE_DELETE_TOKEN_DTO = `
    type DeleteTokenResponseDto {
        deletedAccessToken: String
        deletedCustomerAccessTokenId: String
        ` + TYPE_COMMON_MODEL_RESPONSE + `
    }
`;

export const ACCESS_TOKEN: string = 'accessToken';
export const EXPIRES_AT: string = 'expiresAt';