export interface CustomerUserError {
    code: string
    field: string
    message: string
}   
export interface ErrorReponseDto {
    field: string
    message: string
}   

export const TYPE_RESPOSNE_ERROR = `
    type ErrorReponseDto {
        field: String
        message: String
    }

    type CustomerUserError {
        code: String
        field: String
        message: String
    }
`;