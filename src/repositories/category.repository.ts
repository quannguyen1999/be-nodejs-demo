import pool from "../configs/database.config";
import CategoryRequestDto from "../models/request/category.request.models";
import { CategoryResponseDto } from "../models/response/category.response.models";
import { handlerQuery } from "../utils/function.util";

export const getAll = async (categoryRequestDto: CategoryRequestDto, isCount: boolean) => {
    const queryValue = await handlerQuery(isCount,
        "SELECT * FROM qa_shopee.CATEGORY LIMIT " + categoryRequestDto.size + " OFFSET " + categoryRequestDto.page + "");
    const listResult = (await pool.query(queryValue)).rows;
    return isCount ? listResult : listResult.map(t => {
        const categoryResponseDto: CategoryResponseDto = {
            id: t.id,
            name: t.name,
            image: t.image
        }
        return categoryResponseDto;
    });
}

module.exports = {
    getAll
}