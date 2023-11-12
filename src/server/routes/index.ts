import express, { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.send('Olá, dev')
})

router.post(
    '/teste',
    
    (req: Request, res: Response) => {
    console.log(req.cookies)
    return res.status(StatusCodes.UNAUTHORIZED).json(req.query)
})
export { router }