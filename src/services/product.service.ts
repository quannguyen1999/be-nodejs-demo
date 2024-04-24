import { SHOPIFY_ADMIN_CLIENT } from "../configs/shopify.config";
import { QUERY_GET_LIST_PRODUCT } from "../constants/shopify.constant";
import { ProductRequestDto } from "../models/request/product.request.models";
import { ProductResponseDto } from "../models/response/product.response.models";
import { validateListProduct } from "../validators/product.validator";
import { handlerCommonPageInfo } from "./common.services";


export const listProduct = async (req: any, res: any) => {
    const request: ProductRequestDto = req.productRequestDto || {};
    const response: ProductResponseDto = {};
    const validate = validateListProduct(request);
    if(validate.length > 0){
        response.userErrors = validate;
        return response;
    }

    const data = await SHOPIFY_ADMIN_CLIENT.request(QUERY_GET_LIST_PRODUCT,{
        variables: {
            after: request.after ?? null,
            first: request.first ?? 1,
            // TODO Implement later
            // before: request.before,
            // last: request.last ?? undefined
        }
    });
    return handlerCommonPageInfo(data.data.products);
}