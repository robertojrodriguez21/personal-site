import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

// CREATE
// Create One User
router.post("/createUser", async (request, response) => {
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
