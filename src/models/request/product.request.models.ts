import { CommonModelRequest } from "./common.request.models";

export interface ProductRequestDto extends CommonModelRequest{
    id?: string,
    title?: string,
    handler?: string,
    createdAt?: string,
    description?: string
}   

export const INPUT_PRODUCT = `
  input ProductRequestDto {
    id: String,
    title: String,
    handler: String,
    createdAt: String,
    description: String,
    after: String,
    before: String,
    first: Int,
    last: Int 
  }
`;

export const FIRST = "first";
export const BEFORE = "before";
export const AFTER = "after";
export const LAST = "last";