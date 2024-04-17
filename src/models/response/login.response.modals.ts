export interface LoginResponseDto {
    accessToken?: string,
    refreshToken?: string,
    tokenType?: string,
    expiresIn?: string
}   

export const TYPE_LOGIN_REQUEST_MODAL = `
    type LoginResponseDto {
        accessToken: String
        refreshToken: String
        tokenType: String
        expiresIn: String
    }
`;