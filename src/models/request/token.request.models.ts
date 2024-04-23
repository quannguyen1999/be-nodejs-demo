export interface TokenRequestDto {
    email: string,
    password: string,
    token: string
}   

export const INPUT_TOKEN_REQUEST_DTO = `
    input TokenRequestDto {
        email: String
        password: String
        token: String
    }
`;

export const EMAIL = 'email';
export const PASSWORD = 'password';
export const TOKEN = 'token';
