interface CommonPageInfo<T> {
    page?: number;
    size?: number;
    total?: number;
    data?: T[];
    __typename?: string;
}
export default CommonPageInfo;

