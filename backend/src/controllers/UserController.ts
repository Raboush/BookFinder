import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {

    private service = new UserService();

    getAllUsers(req: Request, res: Response): void {
        const users = this.service.getAllUsers();
        res.json(users);
    }

    getUserById(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const user = this.service.getUserById(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.json(user);
    }

}