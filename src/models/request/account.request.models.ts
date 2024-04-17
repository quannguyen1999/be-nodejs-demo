import { CommonModelRequest, INPUT_COMMON_MODEL_REQUEST } from "./common.request.models";

export interface AccountRequestDto extends CommonModelRequest {
    id?: string,
    username?: string,
    birthday?: Date,
    gender?: boolean,
    email?: string,
    avatar?: string,
    isActive?: string,
    mfaEnabled?: boolean,
    mfaRegistered?: boolean,
    fromBirthday?: string,
    toBirthday?: string
}   

export const INPUT_ACCOUNT_REQUEST_MODEL = `
    input AccountRequestDto {
        id: String
        username: String
        birthday: Date
        gender: Boolean
        email: String
        avatar: String
        isActive: Boolean
        mfaEnabled: Boolean
        mfaRegistered: Boolean
        fromBirthday: String
        toBirthday: String
        ` + INPUT_COMMON_MODEL_REQUEST + `
    }
`;