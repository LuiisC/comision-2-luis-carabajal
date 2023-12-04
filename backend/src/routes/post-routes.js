import { Router } from "express"
import { ctrlCreatePost, ctrlgetAllPosts } from "../controllers/post-controllers.js"
import { handlerException } from "../middlewares/handler-exceptions.js"

const postRouter = Router()

postRouter.get("/posts", ctrlgetAllPosts, handlerException);
postRouter.post("/posts", ctrlCreatePost);

export { postRouter }