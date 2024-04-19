import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

//import this to make env work
dotenv.config({path: path.resolve(__dirname, `../../properties/.env.${process.env.NODE_ENV?.trim()}`)});

// URL
export const GRAPHQL_ENDPOINT = `https://` + process.env.SHOPIFY_STORE_URL + `/admin/api/2023-01/graphql.json`;

export const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_SECRET_KEY;

// Define Graphql
export const QUERY_PRODUCT = `
  {
    products(first: 5) {
      edges {
        node {
          id
          title
          handle
          description
        }
      }
    }
  }
`;

