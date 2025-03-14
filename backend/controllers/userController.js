import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";
import uploadOnCloudinary from "../utils/Cloudinary.js";

const createUser = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw new Error("Please fill all the inputs.");
    }

    const userExists = await User.findOne({ email });
    if (userExists) res.status(400).send("User already exists");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    const token = createToken(res, newUser._id);
    console.log(token);
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      accessToken: token
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) return res.status(400).send("Invalid Credentials");

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(400).send("Invalid Credentials : somethis went wrong");
    }

    const token = createToken(res, existingUser._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      _id: existingUser._id,
      username: existingUser.username,
      email: existingUser.email,
      isAdmin: existingUser.isAdmin,
      accessToken: token
    });
  } catch (error) {
    res.status(400).send(`Internal server error : ${error}`);
  }
});

const logoutCurrentUser = asyncHandler(async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(400).send(`Internal server error : ${error}`);
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(400).send(`Internal server error : ${error}`);
  }
});

const getCurrentUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(404).send(`Internal server error : ${error}`);
  }
});

const updateCurrentUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        user.password = hashedPassword || user.password;
      }

      const updatedUser = await user.save();

      res.status(200).json({ mag: "User updated", user: updatedUser });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).send(`Internal server error : ${error}`);
  }
});

const deleteUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.isAdmin) {
        res.status(400);
        throw new Error("Cannot delete admin user");
      }

      await User.deleteOne({ _id: user._id });
      res.json({ message: "User removed" });
    } else {
      res.status(404);
      throw new Error("User not found.");
    }
  } catch (error) {
    res.status(400).send(`Internal server error : ${error}`);
  }
});

const getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (user.isAdmin) {
      res.status(400);
      throw new Error("Cannot get admin user");
    }
    res.status(200).json({ msg: "User found", user });
  } catch (error) {
    res.status(404).send(`Internal server error : ${error}`);
  }
});

const updateUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user.isAdmin) {
      res.status(400);
      throw new Error("Cannot update admin user");
    }
    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.isAdmin = Boolean(req.body.isAdmin);

      const updatedUser = await user.save();

      res.json({ msg: "User updated", user: updatedUser });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).send(`Internal server error : ${error}`);
  }
});

const updateAvatar = asyncHandler(async (req, res) => {
  try {
    //uplading file from local to clodinary and get URL
    const AvatarLocalPath = req.file?.path;
    if (!AvatarLocalPath) throw new Error("Avatar file missing");
    const avatar = await uploadOnCloudinary(AvatarLocalPath);
    if (!avatar.url)
      throw new Error("Error while uploading Avatar on cludinary");
    // update URL on database
    // geting loggedin userdata through req.user
    const user = await User
      .findByIdAndUpdate(
        req.user?._id,
        {
          $set: {
            avatar: avatar.url,
          },
        },
        { new: true }
      )
      .select("-password -refreshToken");
    if (!user) throw new Error("avatar updation in database failed !");
    res
      .status(200)
      .json({ msg: "Avatar updated successfully", user: user });
  } catch (error) {
    res.status(500).send(`Internal server error : ${error}`);
  }
})

export {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById,
  updateAvatar
};
