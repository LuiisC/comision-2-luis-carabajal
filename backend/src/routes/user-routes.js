import { Router } from "express";
import { ctrlLoginUser, ctrlCreateUser } from "../controllers/user-controllers.js"

const userRouter = Router();

//userRouter.get("/", ctrlListUsers);

userRouter.post("/register", ctrlCreateUser);
userRouter.post("/login", ctrlLoginUser);

//userRouter.get("/:userId", ctrlFindOneUser);
//userRouter.patch("/:userId", ctrlUpdateUser);
//userRouter.delete("/:userId", ctrlDeleteUser);

export {userRouter};