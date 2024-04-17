import CategoryRequestDto from "../models/request/category.request.models";
import { MessageError } from "../constants/message.constant";
import { isValueEmpty } from "./common.validator";

export const validateCreateCategory = (req: CategoryRequestDto) => {
    console.log(req.name)
    isValueEmpty("", MessageError.CATEGORY_NAME_IS_NULL);
};

