import { Router } from "express"
import {
    ctrlCreatePost,
    ctrlDeletePost,
    ctrlUpdatePost,
    ctrlgetAllPosts,
    ctrlgetPostById,
} from "../controllers/post-controllers.js"
import { createPostValidations } from "../validations/post-validations.js";
import { findPostValidation } from "../validations/find-post-validations.js"
import { applyValidations } from "../middlewares/apply-validations.js"
import { updatePostValidations } from "../validations/post-validations.js";

const postRouter = Router();

postRouter.get("/", ctrlgetAllPosts);
postRouter.get("/:postId", findPostValidation, applyValidations, ctrlgetPostById);

postRouter.post("/",createPostValidations , applyValidations, ctrlCreatePost);

postRouter.patch("/:postId", updatePostValidations, applyValidations, ctrlUpdatePost);

postRouter.delete("/:postId", findPostValidation, applyValidations, ctrlDeletePost);



export { postRouter }