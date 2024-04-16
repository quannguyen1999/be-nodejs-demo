import pool from "../configs/database.config";
import CategoryResponseDto from "../models/response/category.response.models";

export const getAll = async () => {
    const listResult = (await pool.query("SELECT * FROM qa_shopee.CATEGORY")).rows;

    return listResult.map(t => {
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