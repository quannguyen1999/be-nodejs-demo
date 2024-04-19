import { ProductRequestDto } from "../models/request/product.request.models";
import { getListProduct } from "../repositories/product.repository";

export const listProduct = async (req: any, res: any) => {
    return await getListProduct(req, res);
}