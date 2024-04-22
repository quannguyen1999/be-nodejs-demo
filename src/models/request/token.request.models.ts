export interface TokenRequestDto {
    email: string,
    password: string
}   

export const INPUT_TOKEN_REQUEST_DTO = `
    input TokenRequestDto {
        email: String
        password: String
    }
`;

export const EMAIL = 'email';
export const PASSWORD = 'password';
