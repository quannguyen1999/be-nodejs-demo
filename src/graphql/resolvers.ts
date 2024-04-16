import { Query } from "pg";
import { listCategory } from "../services/category.service";

export const resolvers = {
    listCategory: async function() {
        return await listCategory();
    },
};