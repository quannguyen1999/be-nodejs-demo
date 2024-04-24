export interface CommonModelRequest {
    createFromDate?: string,
    createToDate?: string,
    listFields?: [string],
    listStringSorted?: string,
    page?: number,
    size?: number

    after?: string,
    before?: string,
    first?: number,
    last?: number 
    customerAccessToken?: string
}

export const INPUT_COMMON_MODEL_REQUEST = `
    after: String,
    before: String,
    first: Int,
    last: Int,
    customerAccessToken: String
`;

export const CUSTOMER_ACCESS_TOKEN = "customerAccessToken";
export const FIRST = "first";
export const BEFORE = "before";
export const AFTER = "after";
export const LAST = "last";