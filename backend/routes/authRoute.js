import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

// CREATE
// Create One User
router.post("/createUser", async (request, response) => {
  try {
    const newUser = {
      firstName: request.body.firstName,
      middleName: request.body.middleName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
      accessType: 5001,
    };

    const user = await User.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
