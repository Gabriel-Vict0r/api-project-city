import express, { type Request, type Response } from 'express'
import 'dotenv/config'
import { router } from "./routes/index";

const server = express()
//o server vai fazer uso das rotas que foram criadas

server.use(express.json())
server.use(router);

export { server }
