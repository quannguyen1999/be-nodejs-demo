import CategoryRequestDto from "../models/request/category.request.models";
import { MessageError } from "../constants/message.constant";
import { isValueEmpty } from "./common.validator";

export const validateCreateCategory = (req: CategoryRequestDto) => {
    isValueEmpty(req.name, MessageError.CATEGORY_NAME_IS_NULL);
};

