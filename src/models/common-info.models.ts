import { ErrorReponseDto } from "./response/error.response.models";

interface CommonPageInfo<T> {
    endCursor: string;
    hasNextPage: string;
    hasPreviousPage: string;
    startCursor: string;
    error?: ErrorReponseDto[];
    data: T[];
}
export default CommonPageInfo;

