import pool from "../configs/database.config";
import { AccountEntity } from "../models/entities/account.entity.models";

export const findByUserName = async (username: string) => {
    const queryValue ="SELECT * FROM qa_shopee.ACCOUNT where username = '" + username + "'";
    const listResult = (await pool.query(queryValue)).rows;
    return listResult.map(t => {
        const accountEntity: AccountEntity = {
            id: t.id,
            username: t.username,
            password: t.password
        }
        return accountEntity;
    });
}

module.exports = {
    findByUserName
}