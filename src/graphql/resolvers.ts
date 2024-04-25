import { createAccount, createAddress, deleteAccount, listAccount } from "../services/account.services";
import { createToken, deleteToken, refreshToken } from "../services/auth.service";
import { listProduct } from "../services/product.service";
export const resolvers = {
    //Account
    createAccount: async(req: any, res: any) => {
        return await createAccount(req, res);
    },
    listAccount: async (req: any, res: any) => {
        return await listAccount(req, res);
    },
    deleteAccount: async (req: any, res: any) => {
        return await deleteAccount(req, res);
    },
    createAddress: async (req: any, res: any) => {
        return await createAddress(req, res);
    },
    //Auth
    createToken: async (req: any, res: any) => {
        return await createToken(req, res);
    },
    deleteToken: async (req: any, res: any) => {
        return await deleteToken(req, res);
    },
    refreshToken: async (req: any, res: any) => {
        return await refreshToken(req, res);
    },
    //Product
    listProduct: async (req: any, res: any) => {
        return await listProduct(req, res);
    },
    
};