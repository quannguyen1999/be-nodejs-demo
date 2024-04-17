import { CommonModelRequest, INPUT_COMMON_MODEL_REQUEST } from "./common.request.models";

export interface CategoryRequestDto extends CommonModelRequest{
    id?: string,
    name?: string,
    image?: string,
}

export const INPUT_CATEGORY_REQUEST_DTO = `
    input CategoryRequestDto {
        id: String
        name: String
        image: String
        ` + INPUT_COMMON_MODEL_REQUEST + `
    }
`;

export default CategoryRequestDto;
