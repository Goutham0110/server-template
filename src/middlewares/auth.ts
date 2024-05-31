import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export default class AuthMiddleware {
    verifyUser(req: Request, res: Response, next: NextFunction) {
        if (!req?.headers?.user) {
            return res.status(httpStatus.BAD_REQUEST).json({
                message: "Unauthorized"
            })
        }
        next();
    }
}