import { Router } from "express";

const categoryService = require('../repositories/category.repository');
const router = Router();

router.get('/', async (req, res, next) => {
    const result = await categoryService.getAll();
    res.status(200).json({
        result
    })
})

export default router;