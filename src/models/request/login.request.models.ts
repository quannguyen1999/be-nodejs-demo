import { CommonModelRequest } from "./common.request.models";

export interface LoginRequestDto extends CommonModelRequest {
    password?: string,
    username?: string
}   

export const INPUT_LOGIN_REQUEST_MODAL = `
    input LoginRequestDto {
        username: String
        password: String
    }
`;