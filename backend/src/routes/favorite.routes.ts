import { Router } from "express";
import { FavoriteController } from "../controllers/FavoriteController";

const router = Router();
const controller = new FavoriteController();

router.get("/favorites", (req, res) => controller.getAllFavorites(req, res));

router.get("/favorites/:id", (req, res) => controller.getFavoriteById(req, res));

export default router;