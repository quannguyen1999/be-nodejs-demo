import { listCategory } from "../services/category.service";

export const resolvers = {
    listCategory: async function(req: any, res: any) {
        return await listCategory(req, res);
    },
};