export const handlerQuery = async (isCount: boolean, query: string) => {
    return isCount ? `SELECT count(*) as total FROM (` + query + ` )` : query;
};