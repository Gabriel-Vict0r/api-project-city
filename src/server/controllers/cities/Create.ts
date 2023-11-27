import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

//interface
interface ICity {
    name: string;
}

//schema of validation
const queryValidation: yup.ObjectSchema<ICity> = yup.object().shape({
    name: yup.string().required().min(3)
})

//middleware
export const createValidation = validation(queryValidation);

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    console.log(req.body);
    return res.send('create');
}