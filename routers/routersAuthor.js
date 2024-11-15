import express from "express";
import { createAuthor } from "../controllers/authorController.js";
import { loggedMiddleware } from "../middlewares/authMiddlewares.js";
import { isAdmin } from "../middlewares/roleMiddlewares.js";

const router = express.Router();

//DEFINING THE ROUTES//
router.post("/", loggedMiddleware, isAdmin, createAuthor);

export default router;
