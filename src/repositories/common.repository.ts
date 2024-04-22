import { GRAPHQL_ENDPOINT, SHOPIFY_ACCESS_TOKEN } from "../constants/shopify.constant";
import {createGraphQLClient} from '@shopify/graphql-client';

// import { GraphQLClient } from 'graphql-request';

export const requestGraphQL = async (query: string) => {
    const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN!,
        },
        body: JSON.stringify({ query }),
    });

    return await response.json();
};



export const requestGraphQLV2 = async (query: string, variables: any) => {
    // const graphQLClient = new GraphQLClient(GRAPHQL_ENDPOINT!, {
    //   headers: {
    //     'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN!,
    //   },
    // })
    // return await graphQLClient.request(query, variables)
  }