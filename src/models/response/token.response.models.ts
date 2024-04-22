import { CommonModelResposne, TYPE_COMMON_MODEL_RESPONSE } from "./common.response.models";

export interface TokenResponseDto extends CommonModelResposne{
    accessToken?: string,
    expiresAt?: Date
}  

export const TYPE_RESPONSE_TOKEN_DTO = `
    type TokenResponseDto {
        accessToken: String
        expiresAt: Date
        ` + TYPE_COMMON_MODEL_RESPONSE + `
    }
`;

export const ACCESS_TOKEN: string = 'accessToken';
export const EXPIRES_AT: string = 'expiresAt';