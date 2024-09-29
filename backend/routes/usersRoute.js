import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

// Create ONE
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.email ||
      !request.body.password ||
      !request.body.accessType
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: firstName, lastName, email, password, accessType",
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

// Read ALL
router.get("/", async (request, response) => {
  try {
    const experiences = await Experience.find({});

    return response.status(200).send({
      count: experiences.length,
      data: experiences,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Read ONE
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const experience = await Experience.findById(id);

    return response.status(200).send(experience);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update ONE
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.startDate ||
      !request.body.body ||
      !request.body.type ||
      !request.body.user_id
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: title, startDate, body, type, user_id",
      });
    }

    const { id } = request.params;

    const result = await Experience.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Experience not found" });
    }

    return response
      .status(200)
      .send({ message: "Experience updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Delete ONE
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Experience.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Experience not found" });
    }

    return response
      .status(200)
      .send({ message: "Experience deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
