import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

// CREATE

// READ
// Read All
router.get("/getAll", async (request, response) => {
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
router.get("/getOne/:user_id", async (request, response) => {
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
router.put("/updateOne/:user_id", async (request, response) => {
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

    return response.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - add one post like to one user
router.put("/addPostLike/:user_id/:post_id", async (request, response) => {
  try {
    const { user_id, post_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, {
      $addToSet: { postLikes: post_id, likes: post_id },
    });

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - remove one post like from one user
router.put("/removePostLike/:user_id/:post_id", async (request, response) => {
  try {
    const { user_id, post_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, {
      $pull: { postLikes: post_id, likes: post_id },
    });

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - add one post dislike to one user
router.put("/addPostDislike/:user_id/:post_id", async (request, response) => {
  try {
    const { user_id, post_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, {
      $addToSet: { postDislikes: post_id, dislikes: post_id },
    });

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - remove one post dislike from one user
router.put(
  "/removePostDislike/:user_id/:post_id",
  async (request, response) => {
    try {
      const { user_id, post_id } = request.params;

      const result = await User.findByIdAndUpdate(user_id, {
        $pull: { postDislikes: post_id, dislikes: post_id },
      });

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
  }
);

// Update One - add one comment like to one user
router.put(
  "/addCommentLike/:user_id/:comment_id",
  async (request, response) => {
    try {
      const { user_id, comment_id } = request.params;

      const result = await User.findByIdAndUpdate(user_id, {
        $addToSet: { commentLikes: comment_id, likes: comment_id },
      });

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
  }
);

// Update One - remove one comment like from one user
router.put(
  "/removeCommentLike/:user_id/:comment_id",
  async (request, response) => {
    try {
      const { user_id, comment_id } = request.params;

      const result = await User.findByIdAndUpdate(user_id, {
        $pull: { commentLikes: comment_id, likes: comment_id },
      });

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
  }
);

// Update One - add one comment dislike to one user
router.put(
  "/addCommentDislike/:user_id/:comment_id",
  async (request, response) => {
    try {
      const { user_id, comment_id } = request.params;

      const result = await User.findByIdAndUpdate(user_id, {
        $addToSet: { commentDislikes: comment_id, dislikes: comment_id },
      });

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
  }
);

// Update One - remove one comment dislike from one user
router.put(
  "/removeCommentDislike/:user_id/:comment_id",
  async (request, response) => {
    try {
      const { user_id, comment_id } = request.params;

      const result = await User.findByIdAndUpdate(user_id, {
        $pull: { commentDislikes: comment_id, dislikes: comment_id },
      });

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
  }
);

// Update One - add one bookmark to one user
router.put("/addBookmark/:user_id/:post_id", async (request, response) => {
  try {
    const { user_id, post_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, {
      $addToSet: { bookmarks: post_id },
    });

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - remove one bookmark from one user
router.put("/removeBookmark/:user_id/:post_id", async (request, response) => {
  try {
    const { user_id, post_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, {
      $pull: { bookmarks: post_id },
    });

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - add one experience to one user
router.put(
  "/addExperience/:user_id/:experience_id",
  async (request, response) => {
    try {
      const { user_id, experience_id } = request.params;

      const result = await User.findByIdAndUpdate(user_id, {
        $addToSet: { experiences: experience_id },
      });

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
  }
);

// Update One - remove one experience from one user
router.put(
  "/removeExperience/:user_id/:experience_id",
  async (request, response) => {
    try {
      const { user_id, experience_id } = request.params;

      const result = await User.findByIdAndUpdate(user_id, {
        $pull: { experiences: experience_id },
      });

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
  }
);

// Update One - add one post to one user
router.put("/addPost/:user_id/:post_id", async (request, response) => {
  try {
    const { user_id, post_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, {
      $addToSet: { posts: post_id },
    });

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - remove one post from one user
router.put("/removePost/:user_id/:post_id", async (request, response) => {
  try {
    const { user_id, post_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, {
      $pull: { posts: post_id },
    });

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - add one comment to one user
router.put("/addComment/:user_id/:comment_id", async (request, response) => {
  try {
    const { user_id, comment_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, {
      $addToSet: { comments: comment_id },
    });

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Update One - remove one comment from one user
router.put("/removeComment/:user_id/:comment_id", async (request, response) => {
  try {
    const { user_id, comment_id } = request.params;

    const result = await User.findByIdAndUpdate(user_id, {
      $pull: { comments: comment_id },
    });

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// DELETE
// Delete One
router.delete("/deleteOne/:user_id", async (request, response) => {
  try {
    const { user_id } = request.params;

    const result = await User.findByIdAndDelete(user_id);

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
