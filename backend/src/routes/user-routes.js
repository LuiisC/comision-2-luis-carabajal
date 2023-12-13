import { Router } from "express";
import { ctrlLogin, crtlRegister } from "../controllers/user-controllers.js"

const userRouter = Router();

userRouter.post("/register", crtlRegister);

userRouter.post("/login", ctrlLogin);

export {userRouter};