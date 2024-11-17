import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";
import { validateEvent } from "../middlewares/validationMiddlewares.js";
import { loggedMiddleware } from "../middlewares/authMiddlewares.js";
import { isAdmin } from "../middlewares/roleMiddlewares.js";

const router = express.Router();

// DEFINING THE ROUTES //
router.get("/", getAllEvents);
router.get("/:id", loggedMiddleware, getEventById);
router.post("/", loggedMiddleware, isAdmin, validateEvent, createEvent);
router.put("/:id", loggedMiddleware, isAdmin, validateEvent, updateEvent);
router.delete("/:id", loggedMiddleware, isAdmin, deleteEvent);

export default router;
