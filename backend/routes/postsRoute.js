import express from "express";
import { Post } from "../models/postModel.js";

const router = express.Router();

// CREATE
// Create One
router.post("/createOne", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.body ||
      !request.body.user_id 
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: title, body, user_id",
      });
    }

    const newPost = {
      title: request.body.title,
      body: request.body.body,
      user_id: request.body.user_id,
    };

    const post = await Post.create(newPost);

    return response.status(201).send(post);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// READ
// Read All
router.get("/getAll", async (request, response) => {
  try {
    const posts = await Post.find({});

    return response.status(200).send({
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Read One
router.get("/getOne/:post_id", async (request, response) => {
  try {
    const { post_id } = request.params;

    const post = await Post.findById(post_id);

    return response.status(200).send(post);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// UPDATE
// Update One
router.put("/updateOne/:post_id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.body ||
      !request.body.user_id 
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: title, body, user_id",
      });
    }

    const { post_id } = request.params;

    const result = await Post.findByIdAndUpdate(post_id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Post not found" });
    }

    return response
      .status(200)
      .send({ message: "Post updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - add one like to one post
router.put("/addLike/:post_id/:user_id", async (request, response) => {
  try {
    const { post_id, user_id } = request.params;

    const result = await User.findByIdAndUpdate(post_id, { $addToSet: { likes: user_id } });

    if (!result) {
      return response.status(404).json({ message: "Post not found" });
    }

    return response
      .status(200)
      .send({ message: "Post updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - remove one like from one post
router.put("/removeLike/:post_id/:user_id", async (request, response) => {
  try {
    const { post_id, user_id } = request.params;

    const result = await User.findByIdAndUpdate(post_id, { $pull: { likes: user_id } });

    if (!result) {
      return response.status(404).json({ message: "Post not found" });
    }

    return response
      .status(200)
      .send({ message: "Post updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// DELETE
// Delete One
router.delete("/deleteOne/:post_id", async (request, response) => {
  try {
    const { post_id } = request.params;

    const result = await Post.findByIdAndDelete(post_id);

    if (!result) {
      return response.status(404).json({ message: "Post not found" });
    }

    return response
      .status(200)
      .send({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
