import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";
import { createStorefrontApiClient } from "@shopify/storefront-api-client";

//import this to make env work
dotenv.config({path: path.resolve(__dirname, `../../properties/.env.${process.env.NODE_ENV?.trim()}`)});

export const SHOPIFY_CLIENT = createStorefrontApiClient({
    storeDomain: process.env.SHOPIFY_STORE_URL?.trim()!,
    apiVersion: process.env.SHOPIFY_API_VERSION?.trim()!,
    privateAccessToken: process.env.SHOPIFY_SECRET_KEY?.trim()!
});
  