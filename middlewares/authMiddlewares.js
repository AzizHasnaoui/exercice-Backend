import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { JWT_SECRET } from "../controllers/userController.js";

///////////////////////////////LOGGED MIDDLEWARE////////////////////////////////////
export const loggedMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res.status(403).json({ error: "Access denied, token missing" });

    const token = authHeader.split(" ")[1];

    const decodedToken = jwt.verify(token, JWT_SECRET);
    const userId = decodedToken.userId;

    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(401).json({ error: "User doesn't exist" });
    }

    req.auth = {
      userId: userId,
      role: user.role,
    };
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
