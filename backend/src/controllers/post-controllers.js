import { posts } from "../models/post-model.js"

export const ctrlgetAllPosts = async (req, res, next) => {
    try {
        if (posts.length < 1) {
            return res.sendStatus(204)
        }
        res.status(200).json(posts)
        
    } catch (error) {
        next("No hay posts")
    }
}


export const ctrlCreatePost = (req, res, next) => {

    const {title, desc, image} = req.body

    const newPost = {
        title: title,
        desc: desc,
        image: image
    }
    posts.push(newPost)

}