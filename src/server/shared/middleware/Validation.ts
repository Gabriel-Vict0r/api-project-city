import { RequestHandler } from "express";
import { Schema, ValidationError } from 'yup';
import { StatusCodes } from "http-status-codes";
type TValidation = (field: 'header' | 'body' | 'params' | 'query', schema: Schema<any>) => RequestHandler;

//middleware of generic validation
export const validation: TValidation = (schema: Schema<any>) => async (req, res, next) => {
    console.log('test');
    try {
        await schema.validate(req.query, { abortEarly: false });
        return next();
    } catch (err) {
        const yupError = err as ValidationError

        //Type that receive a key/value from string type
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