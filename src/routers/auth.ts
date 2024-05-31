import { Router } from "express";
import { AuthController } from "../controllers/auth";

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.login);

export default authRouter;