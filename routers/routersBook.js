import express from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  createBookWithAuthorCheck,
} from "../controllers/bookController.js";
import { loggedMiddleware } from "../middlewares/authMiddlewares.js";
import { isAdmin } from "../middlewares/roleMiddlewares.js";

const router = express.Router();

//DEFINING THE ROUTES//
router.get("/", loggedMiddleware, getAllBooks);
router.get("/:id", loggedMiddleware, getBookById);
router.post("/", loggedMiddleware, isAdmin, createBook);
router.post("/create-book-with-author-check", loggedMiddleware, isAdmin, createBookWithAuthorCheck);
router.patch("/:id", loggedMiddleware, isAdmin, updateBook);
router.delete("/:id", loggedMiddleware, isAdmin, deleteBook);

export default router;
