import { Request, Response } from "express";
import httpStatus from "http-status";

export class AuthController {

    login = async (req: Request, res: Response) => {
        return res.status(httpStatus.OK).json({
            message: "Logged In"
        })
    }

    logout = async (req: Request, res: Response) => {
        return res.status(httpStatus.OK).json({
            message: "Logged Out"
        })
    }

}