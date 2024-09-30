import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
    ],
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const commentsDB = mongoose.connection.useDb("comments");

export const Comment = commentsDB.model("Comment", commentSchema);
