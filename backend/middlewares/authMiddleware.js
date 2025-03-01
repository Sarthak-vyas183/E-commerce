import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt || req.header("Authorization")?.replace("Bearer ", "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
     const user = await User.findById(decoded.userId).select("-password");
     if(!user) {
        res.status(404);
        throw new Error("User not found : Invalid Token.");
     }
     req.user = user;
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed.");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token.");
  }
});

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Not authorized as an admin.");
  }
};

export { authenticate, authorizeAdmin };
