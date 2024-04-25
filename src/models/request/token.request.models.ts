export interface TokenRequestDto {
    email: string,
    password: string,
    token: string,
    refreshToken: string
}   

export const INPUT_TOKEN_REQUEST_DTO = `
    input TokenRequestDto {
        email: String
        password: String
        token: String
        refreshToken: String
    }
    
`;

export const EMAIL = 'email';
export const PASSWORD = 'password';
export const TOKEN = 'token';
export const REFRESH_TOKEN = 'refreshToken';
