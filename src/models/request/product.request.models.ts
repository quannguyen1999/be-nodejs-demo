import { CommonModelRequest } from "./common.request.models";

export interface ProductRequestDto extends CommonModelRequest{
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