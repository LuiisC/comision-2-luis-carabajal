import { Router } from "express"
import { ctrlCreatePost, ctrlgetAllPosts, verificarValidaciones } from "../controllers/post-controllers.js"
import { handlerException } from "../middlewares/handler-exceptions.js"
import { createPostValidations } from "../validations/post-validations.js";

const postRouter = Router();

postRouter.get("/", ctrlgetAllPosts, handlerException);
postRouter.post("/",createPostValidations , verificarValidaciones, ctrlCreatePost);

export { postRouter }