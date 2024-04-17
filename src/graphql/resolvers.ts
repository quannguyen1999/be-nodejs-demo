import { login } from "../services/auth.service";
import { listCategory, createCategory } from "../services/category.service";

export const resolvers = {
    listCategory: async (req: any, res: any) => {
        return await listCategory(req, res);
    },
    createCategory: async (req: any, res: any) => {
        return await createCategory(req, res);
    },
    login: async (req: any, res: any) => {
        return await login(req, res);
    },
};