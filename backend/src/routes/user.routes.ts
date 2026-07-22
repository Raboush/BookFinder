import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const controller = new UserController();

router.get("/users", (req, res) => controller.getAllUsers(req, res));

router.get("/users/:id", (req, res) => controller.getUserById(req, res));

export default router;