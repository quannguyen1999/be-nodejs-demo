import { CommonModelRequest } from "./common.request.models";

export interface RefreshTokenDto {
    refreshToken: string
}   

export const INPUT_REFRESH_TOKEN_DTO = `
    input RefreshTokenDto {
        refreshToken: String
    }
`;