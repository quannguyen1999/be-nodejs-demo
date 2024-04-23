import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

//import this to make env work
dotenv.config({path: path.resolve(__dirname, `../../properties/.env.${process.env.NODE_ENV?.trim()}`)});

// URL
export const GRAPHQL_ENDPOINT = `https://` + process.env.SHOPIFY_STORE_URL + `/admin/api/2023-01/graphql.json`;

export const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_SECRET_KEY;

// Customer
export const QUERY_CREATE_ACCESS_TOKEN = `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      },
      userErrors {
        field
        message
      }
    }
  }
`;

export const QUERY_CREATE_CUSTOMER = `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        email
        firstName
        lastName
        phone
        acceptsMarketing
      } 
      customer {
        id
        email
        firstName
        lastName
        phone
        createdAt
      }
    }
  }
`;

export const QUERY_GET_LIST_ACCOUNT = `
  query queryCustomer(
      $after: String,
      $before: String,
      $first: Int,
      $last: Int
    ) {
      customers (
        after: $after,
        before: $before,
        first: $first,
        last: $last
      ) {
        edges {
          cursor
          node {
            id
            email
            firstName
            lastName
            verifiedEmail
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
`;

export const QUERY_GET_LIST_PRODUCT = `
  query queryProduct(
      $after: String,
      $before: String,
      $first: Int,
      $last: Int
    ) {
      products (
        after: $after,
        before: $before,
        first: $first,
        last: $last
      ) {
        edges {
          cursor
          node {
            id
            title
            handle
            createdAt
            description
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
`;


export const QUERY_DELETE_TOKEN = `
  mutation customerAccessTokenDelete($token: String!) {
    customerAccessTokenDelete(token: $token) {
      deletedAccessToken
      deletedCustomerAccessTokenId
      userErrors {
        field
        message
      }
    }
  }
`;
