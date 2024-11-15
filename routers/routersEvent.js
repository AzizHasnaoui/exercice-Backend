import express from "express";
import { createEvent, getAllEvents } from "../controllers/eventController.js";
import { validateEvent } from "../middlewares/validationMiddlewares.js";
import { loggedMiddleware } from "../middlewares/authMiddlewares.js";
import { isAdmin } from "../middlewares/roleMiddlewares.js";

const router = express.Router();

//DEFINING THE ROUTES//
router.post("/", loggedMiddleware, isAdmin, validateEvent, createEvent);
router.get("/", getAllEvents);

export default router;
