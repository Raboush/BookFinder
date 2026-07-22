import { Router } from "express";
import { SearchController } from "../controllers/SearchController";

const router = Router();
const controller = new SearchController();

router.get("/search", (req, res) => controller.search(req, res));

export default router;