import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
interface ICity {
    name: string;
}
const bodyValidation: yup.ObjectSchema<ICity> = yup.object().shape({
    name: yup.string().required().min(3)
})

export const createBodyvalidator: RequestHandler = async (req, res, next) => {
    try {
        await bodyValidation.validate(req.body, { abortEarly: false });
        return next();
    } catch (err) {
        const yupError = err as yup.ValidationError
        //Tipo que recebe uma chave/valor do tipo string
        const errors: Record<string, string> = {};

        yupError.inner.forEach((error) => {
            if (!error.path) {
                return;
            }
            error.message
            error.path
            errors[error.path] = error.message;
        })

        return res.status(StatusCodes.BAD_REQUEST).json({ errors });
    }
}
export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    console.log(req.body);
    return res.send('create');
}