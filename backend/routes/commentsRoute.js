import express from "express";
import { Comment } from "../models/commentModel.js";

const router = express.Router();

// CREATE
// Create One
router.post("/createOne", async (request, response) => {
  try {
    if (
      !request.body.body ||
      !request.body.post_id ||
      !request.body.user_id 
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: body, post_id, user_id",
      });
    }

    const newComment = {
      body: request.body.body,
      post_id: request.body.post_id,
      user_id: request.body.user_id,
    };

    const comment = await Comment.create(newComment);

    return response.status(201).send(comment);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// READ
// Read All
router.get("/getAll", async (request, response) => {
  try {
    const comments = await Comment.find({});

    return response.status(200).send({
      count: comments.length,
      data: comments,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Read One
router.get("/getOne/:comment_id", async (request, response) => {
  try {
    const { comment_id } = request.params;

    const comment = await Comment.findById(comment_id);

    return response.status(200).send(comment);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// UPDATE
// Update One
router.put("/updateOne/:comment_id", async (request, response) => {
  try {
    if (
      !request.body.body ||
      !request.body.post_id ||
      !request.body.user_id 
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: body, post_id, user_id",
      });
    }

    const { comment_id } = request.params;

    const result = await Comment.findByIdAndUpdate(comment_id, request.body);

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
router.delete("/deleteOne/:comment_id", async (request, response) => {
  try {
    const { comment_id } = request.params;

    const result = await Comment.findByIdAndDelete(comment_id);

    if (!result) {
      return response.status(404).json({ message: "Comment not found" });
    }

    return response
      .status(200)
      .send({ message: "Comment deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
