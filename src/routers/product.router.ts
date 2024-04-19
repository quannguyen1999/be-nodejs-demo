import { Router } from "express";
import { getListProduct } from "../repositories/product.repository";

const router = Router();

router.get('/',async  (req, res) => {
    res.send(await getListProduct(req, res));
})

export default router;