import { GRAPHQL_ENDPOINT, QUERY_PRODUCT, SHOPIFY_ACCESS_TOKEN } from "../constants/shopify.constant";
export const getListProduct = async (req: any, res: any) => {
    return await requestGraphQL(QUERY_PRODUCT);
}

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