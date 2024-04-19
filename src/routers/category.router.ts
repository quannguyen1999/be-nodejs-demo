import { Router } from "express";
// import Shopify from "shopify-api-node";
import createApp from "@shopify/app-bridge";
import { getSessionToken } from "@shopify/app-bridge/utilities";
import CommonPageInfo from "../models/common-info.models";
import { CategoryResponseDto } from "../models/response/category.response.models";
import { getListProduct } from "../repositories/product.repository";


const categoryService = require('../repositories/category.repository');
const router = Router();

// const shopify = new Shopify({
//   shopName: 'testing-ecommer.myshopify.com',
//   apiKey: '46e4b0a48296158da5ed554e2bcbd626',
//   password: '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'
// });

const app = createApp({
    apiKey: "46e4b0a48296158da5ed554e2bcbd626",
    host: "testing-ecommer.myshopify.com"
});
  
const queryString = `{
    products (first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }`


router.get('/',async  (req, res) => {
    await getListProduct(req, res);
})

export default router;