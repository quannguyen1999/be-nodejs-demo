import { Router } from "express";
import { createToken } from "../services/auth.service";
import { createAccount, listAccount } from "../services/account.services";

const router = Router();

router.post('/create', async  (req, res) => {
    const data = await createAccount(req, res);
    res.send(data);
})

router.get('/list', async  (req, res) => {
    const data = await listAccount(req, res);
    res.send(data);
})


router.post('/token', async  (req, res) => {
    const data = await createToken(req, res);
    res.send(data);
})

export default router;