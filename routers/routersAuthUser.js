import express from "express";
import { loginUser, signupUser } from "../controllers/userController.js";
import { validateSignup } from "../middlewares/validationMiddlewares.js";

const router = express.Router();

//DEFINING THE ROUTES//
router.post("/signup", validateSignup, signupUser);
router.post("/login", loginUser);

export default router;
