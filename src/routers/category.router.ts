import { Router } from "express";
// import Shopify from "shopify-api-node";
import createApp from "@shopify/app-bridge";
import { getSessionToken } from "@shopify/app-bridge/utilities";
import CommonPageInfo from "../models/common-info.models";
import { CategoryResponseDto } from "../models/response/category.response.models";
import { getListProduct } from "../repositories/product.repository";


const categoryService = require('../repositories/category.repository');
const router = Router();
  
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