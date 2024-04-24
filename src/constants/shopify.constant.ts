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
        id
        email
        firstName
        lastName
        phone
        createdAt
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const QUERY_DELETE_CUSTOMER = `
  mutation customerDelete($input: CustomerDeleteInput!) {
    customerDelete(input: $input) {
      deletedCustomerId
      userErrors {
        field
        message
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
mutation customerAccessTokenDelete($customerAccessToken: String!) {
  customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
    deletedAccessToken
    deletedCustomerAccessTokenId
    userErrors {
      field
      message
    }
  }
}
`;

// Cart 
export const  QUERY_CART_CREATE = `
mutation cartCreate($input: CartInput) {
  cartCreate (input: $input) {
    cart {
      id
    }
    userErrors {
      field
      message
    }
  }
}
`;

export const  QUERY_CUSTOMER_ADDRESS_CREATE = `
mutation customerAddressCreate($address: MailingAddressInput!, $customerAccessToken: String!) {
  customerAddressCreate(address: $address, customerAccessToken: $customerAccessToken) {
    customerAddress {
      address1
      address2
      city
      company
      country
      firstName
      lastName
      phone
      province
      zip
    }
    customerUserErrors {
      code
      field
      message
    }
    userErrors {
      field
      message
    }
  }
}
`;