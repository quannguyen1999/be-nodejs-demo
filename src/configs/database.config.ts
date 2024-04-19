import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

//import this to make env work
dotenv.config({path: path.resolve(__dirname, `../../properties/.env.${process.env.NODE_ENV?.trim()}`)});

const pool = new Pool({
    user: process.env.DB_USER?.trim(),
    host: process.env.DB_HOST?.trim(),
    database: process.env.DB_SCHEMA?.trim(),
    password: process.env.DB_PASSWORD?.trim(),
    port: Number(process.env.DB_PORT?.trim()),
})

export default pool;