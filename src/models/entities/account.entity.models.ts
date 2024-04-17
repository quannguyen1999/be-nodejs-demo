import { CommonBaseEntities } from "./common.entity.models";

export interface AccountEntity extends CommonBaseEntities{
    id?: string,
    username?: string,
    password?: string,
    birthday?: Date,
    gender?: string,
    email?: string,
    avatar?: string,
    isActive?: string
}   
