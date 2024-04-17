import CommonPageInfo from "../models/common-info.models";
import CategoryRequestDto from "../models/request/category.request.models";
import { CategoryResponseDto } from "../models/response/category.response.models";
import { getAll } from "../repositories/category.repository";


export const listCategory = async (req: any, res: any) => {
    const categoryRequestDto: CategoryRequestDto = req?.categoryRequestDto;
    const result = await getAll(categoryRequestDto, false);
    const count = await getAll(categoryRequestDto, true);
    const commonPageInfo: CommonPageInfo<CategoryResponseDto> = {
        page: categoryRequestDto.page,
        size: categoryRequestDto.size,
        total: count[0].total,
        data: result
    }
    return commonPageInfo;
}

exports.module = [
    listCategory
];