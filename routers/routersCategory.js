import express from "express";
import { createCategory } from "../controllers/categoryController.js";
import { loggedMiddleware } from "../middlewares/authMiddlewares.js";
import { isAdmin } from "../middlewares/roleMiddlewares.js";
const router = express.Router();

//DEFINING THE ROUTES//
router.post("/", loggedMiddleware, isAdmin, createCategory);

export default router;
