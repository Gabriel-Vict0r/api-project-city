import express, { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Router } from "express";
import { CidadesController } from './../controllers'
const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.send('Olá, dev')
})

router.post(
    '/cidades',
    CidadesController.create)
export { router }