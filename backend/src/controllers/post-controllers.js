import { posts } from "../models/post-model.js"
import { validationResult } from "express-validator"

export const verificarValidaciones = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }
    next();
}

export const ctrlgetAllPosts = async (req, res, next) => {
    try {
        if (!posts) {
            return res.sendStatus(204)
        }
        res.status(200).json(posts)
        
    } catch (error) {
        next("No hay posts")
    }
}

export const ctrlCreatePost = (req, res, next) => {
    const { title, desc, image } = req.body

    posts.push({ title, desc, image });
    res.sendStatus(201);
}