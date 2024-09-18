import mongoose, { Types } from "mongoose";

const experienceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: false,
    },
    body: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const experiencesDB = mongoose.connection.useDb("experiences");

export const Experience = experiencesDB.model("Experience", experienceSchema);
