import { Router } from "express";
import { getAccessScope } from "../services/auth.service";
const router = Router();

//Get list scope of token
router.get('/getAccessScope', async  (req, res) => {
    res.send(await getAccessScope(req, res));
})

export default router;