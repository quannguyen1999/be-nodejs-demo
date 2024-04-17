import { requestToken, refreshToken } from "../services/auth.service";
import { listCategory, createCategory } from "../services/category.service";

export const resolvers = {
    listCategory: async (req: any, res: any) => {
        return await listCategory(req, res);
    },
    createCategory: async (req: any, res: any) => {
        return await createCategory(req, res);
    },
    requestToken: async (req: any, res: any) => {
        return await requestToken(req, res);
    },
    refreshToken: async (req: any, res: any) => {
        return await refreshToken(req, res);
    },
};