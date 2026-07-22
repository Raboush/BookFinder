import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";

const router = Router();
const controller = new CategoryController();

router.get("/categories", (req, res) => controller.getAllCategories(req, res));

router.get("/categories/:id", (req, res) => controller.getCategoryById(req, res));

export default router;