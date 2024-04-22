import { Router } from "express";
import { AccountRequestDto } from "../models/request/account.request.models";
import { createAccount, createToken } from "../services/account.services";

const router = Router();

router.post('/create', async  (req, res) => {
    const data = await createAccount(req, res);
    res.send(data);
})

router.post('/token', async  (req, res) => {
    const data = await createToken(req, res);
    res.send(data);
})

export default router;