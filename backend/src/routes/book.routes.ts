import { Router } from "express";
import { BookController } from "../controllers/BookController";

const router = Router();
const controller = new BookController();

router.get("/books", (req, res) => controller.getAllBooks(req, res));

router.get("/books/:id", (req, res) => controller.getBookById(req, res));

export default router;