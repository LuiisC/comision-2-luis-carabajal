import { PosteoModel } from '../models/posteo-model.js';

export const ctrlCreatePosteo = async (req, res) => {
  const userId = req.user._id;

  try {
    const { title } = req.body;

    const posteo = new PosteoModel({
      title,
      author: userId,
    });

    await posteo.save();

    return res.status(201).json(posteo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlListPosteo = async (req, res) => {
  const userId = req.user._id;

  try {
    const posteos = await PosteoModel.find({ author: userId })
      .populate('author', ['name', 'email'])

    return res.status(200).json(posteos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlGetPosteo = async (req, res) => {
  const userId = req.user._id;
  const { posteoId } = req.params;

  try {
    const posteo = await PosteoModel.findOne({
      _id: posteoId,
      author: userId,
    })
      .populate('author', ['name', 'email'])

    if (!posteo) {
      return res.status(404).json({ error: 'Posteo not found' });
    }

    return res.status(200).json(posteo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlUpdatePosteo = async (req, res) => {
  const userId = req.user._id;
  const { posteoId } = req.params;

  try {
    const posteo = await PosteoModel.findOne({
      _id: posteoId,
      author: userId,
    });

    if (!posteo) {
      return res.status(404).json({ error: 'Posteo not found' });
    }

    posteo.set(req.body);

    await posteo.save();

    return res.status(200).json(posteo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlDeletePosteo = async (req, res) => {
  const userId = req.user._id;
  const { posteoId } = req.params;

  try {
    const posteo = await PosteoModel.findOne({
      _id: posteoId,
      author: userId,
    });

    if (!posteo) {
      return res.status(404).json({ error: 'Posteo not found' });
    }

    await PosteoModel.findOneAndDelete({
      _id: posteoId,
      author: userId,
    });

    return res.status(200).json(posteo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const isAuthor = async ({ posteoId, userId }) => {
  try {
    const posteo = await PosteoModel.findOne({
      _id: posteoId,
      author: userId,
    });

    if (!posteo) {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};