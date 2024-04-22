import { CommonModelRequest } from "./common.request.models";

export interface LoginRequestDto extends CommonModelRequest {
    username?: string,
    password?: string
}   

export const INPUT_LOGIN_REQUEST_DTO = `
    input LoginRequestDto {
        username: String
        password: String
    }
`;