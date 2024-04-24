import { ErrorReponseDto } from "./error.response.models";

export interface CommonModelResposne {
    userErrors?: ErrorReponseDto[]
}

export const TYPE_COMMON_MODEL_RESPONSE = `
    userErrors: [ErrorReponseDto]!
`;