import dotenv from "dotenv";
import path from "path";


//import this to make env work
dotenv.config({path: path.resolve(__dirname, `../../properties/.env.${process.env.NODE_ENV?.trim()}`)});


export const PASSWORD_SECRET_KEY =  process.env.PASSWORD_SECRET_KEY?.trim()!;
export const TOKEN_SECRET_JEY =  process.env.TOKEN_SECRET_JEY?.trim()!;
export const TOKEN_LIFE =  process.env.TOKEN_LIFE?.trim()!;
export const REFRESH_SECRET_JEY =  process.env.REFRESH_SECRET_JEY?.trim()!;
export const REFRESH_TOKEN_LIFE =  process.env.REFRESH_TOKEN_LIFE?.trim()!;
export const SHOPIFY_API_KEY =  process.env.SHOPIFY_API_KEY?.trim()!;
export const SHOPIFY_PUBLIC_KEY =  process.env.SHOPIFY_PUBLIC_KEY?.trim()!;
export const SHOPIFY_NAME =  process.env.SHOPIFY_NAME?.trim()!;
export const SYSTEM_USERNAME =  process.env.SYSTEM_USERNAME?.trim()!;
export const SYSTEM_PASSWORD =  process.env.SYSTEM_PASSWORD?.trim()!;
export const SHOPIFY_SECRET_KEY =  process.env.SHOPIFY_SECRET_KEY?.trim()!;












