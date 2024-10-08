import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter firstName"],
    },
    middleName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: [true, "Please enter lastName"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
      minlength: [8, "Password must be at least 8 characters"],
    },
    accessType: {
      type: Number,
      required: [true, "Please enter accessType"],
    },
    experiences: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Experience",
        required: false,
      },
    ],
    bookmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: false,
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: false,
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: false,
      },
    ],
    postLikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: false,
      },
    ],
    postDislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: false,
      },
    ],
    commentLikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: false,
      },
    ],
    commentDislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: false,
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
      },
    ],
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Before sending object to database
userSchema.post('save', function (doc, next) {
  console.log('new user created', doc)
  
  next()
})

const usersDB = mongoose.connection.useDb("users");

export const User = usersDB.model("User", userSchema);
