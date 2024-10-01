import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

// CREATE
// Create One
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.email ||
      !request.body.password 
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: firstName, lastName, email, password",
      });
    }

    const newUser = {
      firstName: request.body.firstName,
      middleName: request.body.middleName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
      accessType: 1,
    };

    const user = await User.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// READ
// Read All
router.get("/", async (request, response) => {
  try {
    const users = await User.find({});

    return response.status(200).send({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Read One
router.get("/:user_id", async (request, response) => {
  try {
    const { user_id } = request.params;

    const user = await User.findById(user_id);

    return response.status(200).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// UPDATE
// Update One
router.put("/:user_id", async (request, response) => {
  try {
    if (
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.email ||
      !request.body.password
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: firstName, lastName, email, password",
      });
    }

    const { user_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, request.body);

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response
      .status(200)
      .send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - add one post like to user
router.put("/addPostLike/:user_id/:post_id", async (request, response) => {
  try {
    const { user_id, post_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, { $addToSet: { postLikes: post_id, likes: post_id } });

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response
      .status(200)
      .send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - add one post like to user
router.put("/removePostLike/:user_id/:post_id", async (request, response) => {
  try {
    const { user_id, post_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, { $pull: { postLikes: post_id, likes: post_id } });

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response
      .status(200)
      .send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// DELETE
// Delete One
router.delete("/:user_id", async (request, response) => {
  try {
    const { user_id } = request.params;

    const result = await User.findByIdAndDelete(user_id);

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response
      .status(200)
      .send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
