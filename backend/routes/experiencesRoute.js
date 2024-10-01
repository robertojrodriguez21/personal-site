import express from "express";
import { Experience } from "../models/experienceModel.js";

const router = express.Router();

// CREATE
// Create One
router.post("/createOne", async (request, response) => {
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

    const newExperience = {
      title: request.body.title,
      company: request.body.company,
      location: request.body.location,
      startDate: request.body.startDate,
      endDate: request.body.endDate,
      body: request.body.body,
      type: request.body.type,
      user_id: request.body.user_id,
    };

    const experience = await Experience.create(newExperience);

    return response.status(201).send(experience);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// READ
// Read All
router.get("/getAll", async (request, response) => {
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

// Read One
router.get("/getOne/:experience_id", async (request, response) => {
  try {
    const { experience_id } = request.params;

    const experience = await Experience.findById(experience_id);

    return response.status(200).send(experience);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// UPDATE
// Update One
router.put("/updateOne/:experience_id", async (request, response) => {
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

    const { experience_id } = request.params;

    const result = await Experience.findByIdAndUpdate(experience_id, request.body);

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

// DELETE
// Delete One
router.delete("/deleteOne/:experience_id", async (request, response) => {
  try {
    const { experience_id } = request.params;

    const result = await Experience.findByIdAndDelete(experience_id);

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
