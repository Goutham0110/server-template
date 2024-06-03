import { Router } from "express";
import httpStatus from "http-status";
import authRouter from "./auth";
import AuthMiddleware from "../middlewares/auth";

const router = Router();
const authMiddleware = new AuthMiddleware();

/**
 * Public Routes
 */

router.get('/health-check', (req, res) => {
    return res.status(httpStatus.OK).json({
        message: "Server alive and running"
    })
});

router.use('/auth', authRouter);

/**
 * Private Routes
 */

router.use(authMiddleware.verifyUser);


export default router;