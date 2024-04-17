export interface LoginResponseDto {
    accessToken?: string,
    refreshToken?: string,
    tokenType?: string,
    expiresIn?: number
}   

export const TYPE_LOGIN_REQUEST_MODAL = `
    type LoginResponseDto {
        accessToken: String
        refreshToken: String
        tokenType: String
        expiresIn: Int
    }
`;