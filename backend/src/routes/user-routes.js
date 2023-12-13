import { Router } from "express";
import { ctrlLogin, ctrlCreateUser, ctrlListUsers, ctrlFindOneUser,ctrlDeleteUser, ctrlUpdateUser } from "../controllers/user-controllers.js"

const userRouter = Router();

userRouter.get("/", ctrlListUsers);

userRouter.post("/register", ctrlCreateUser);
userRouter.post("/login", ctrlLogin);

userRouter.get("/:userId", ctrlFindOneUser);
userRouter.patch("/:userId", ctrlUpdateUser);
userRouter.delete("/:userId", ctrlDeleteUser);

export {userRouter};