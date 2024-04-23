import { ErrorReponseDto } from "./error.response.models";

export interface CommonModelResposne {
    error?: ErrorReponseDto[]
}

export const TYPE_COMMON_MODEL_RESPONSE = `
    error: [ErrorReponseDto]!
`;