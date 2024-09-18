import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// Route imports
import experiencesRoute from "./routes/experiencesRoute.js";
import usersRoute from "./routes/usersRoute.js";

// Server setup
const app = express();
app.use(express.json());
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Server Up");
});

// CORS Policy Handler
app.use(cors());

// API call routes
app.use("/users", usersRoute);
app.use("/experiences", experiencesRoute);

// Establishing database and server connections
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const PORT = process.env.PORT || 3001;

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log(`App connected to database`);
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
