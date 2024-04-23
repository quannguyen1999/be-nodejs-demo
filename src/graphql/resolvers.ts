import { createAccount, listAccount } from "../services/account.services";
import { createToken, deleteToken } from "../services/auth.service";
import { listCategory, createCategory } from "../services/category.service";

export const resolvers = {
    listCategory: async (req: any, res: any) => {
        return await listCategory(req, res);
    },
    createCategory: async (req: any, res: any) => {
        return await createCategory(req, res);
    },
    //customer
    createCustomer: async(req: any, res: any) => {
        return await createAccount(req, res);
    },
    listAccount: async (req: any, res: any) => {
        return await listAccount(req, res);
    },
    //Auth
    createToken: async (req: any, res: any) => {
        return await createToken(req, res);
    },
    deleteToken: async (req: any, res: any) => {
        return await deleteToken(req, res);
    },
    
};