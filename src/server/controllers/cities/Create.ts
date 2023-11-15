import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface ICity {
    name: string;
}
const bodyValidation: yup.ObjectSchema<ICity> = yup.object().shape({
    name: yup.string().required().min(3)
})
export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
    let validatedData: ICity | undefined = undefined
    try {
        validatedData = await bodyValidation.validate(req.body);
    } catch (error) {
        const yupError = error as yup.ValidationError

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: yupError.message
            }
        });
    }
    const data: ICity = req.body;
    console.log(validatedData);
    return res.send('create');
}