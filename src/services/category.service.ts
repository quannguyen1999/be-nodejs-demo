import CommonPageInfo from "../models/common-info.models";
import CategoryRequestDto from "../models/request/category.request.models";
import CategoryResponseDto from "../models/response/category.response.models";
import { getAll } from "../repositories/category.repository";


export const listCategory = async (req: any, res: any) => {
    console.log(req?.categoryRequestDto.name);
    const result = await getAll();
    const commonPageInfo: CommonPageInfo<CategoryResponseDto> = {
        page: 0,
        size: 0,
        total: 0,
        data: result
    }
    return commonPageInfo;
}

exports.module = [
    listCategory
];