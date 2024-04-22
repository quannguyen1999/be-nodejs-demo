export interface ErrorReponseDto {
    field: string
    message: string
}   

export const TYPE_RESPOSNE_ERROR = `
    type ErrorReponseDto {
        field: String!
        message: String!
    }
`;