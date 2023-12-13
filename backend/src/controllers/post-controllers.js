import { postModel } from "../models/post-model.js"
import { validationResult } from "express-validator"

export const ctrlgetAllPosts = async (req, res, next) => {
    const post = postModel.findAll();
    
    res.json(post);
}

export const ctrlgetPostById = (req, res, next) => {
    
    const { postId } = req.params;

    console.log(req.params);
  
    const post = postModel.findOne({ id: postId });
  
    if (!post) {
      return res.sendStatus(404);
    }
  
    res.status(200).json(post);

};

export const ctrlCreatePost = (req, res, next) => {
    const { title, desc, image } = req.body

    posts.push({ title, desc, image });
    res.sendStatus(201);
};

export const ctrlUpdatePost = (req, res) => {
    console.log(req.params);
  
    const { postId } = req.params;
  
    const { title, desc, image } = req.body;
  
    const updatedPost = postModel.update(postId, { title, desc, image });
  
    if (!updatedPost) return res.sendStatus(404);
  
    res.sendStatus(200);
  };
  
  export const ctrlDeletePost = (req, res) => {
    const { postId } = req.params;
  
    postModel.destroy({ id: postId });
  
    res.sendStatus(200);
  };