export interface CommonModelRequest {
    createFromDate?: string,
    createToDate?: string,
    listFields?: [string],
    listStringSorted?: string,
    page?: number,
    size?: number
}

export const INPUT_COMMON_MODEL_REQUEST = `
    createFromDate: String
    createToDate: String
    listFields: [String]
    listSorted: [Map]
    listStringSorted: String
    page: Int!
    size: Int!
`;