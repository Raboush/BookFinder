import { Request, Response } from "express";
import { FavoriteService } from "../services/FavoriteService";

export class FavoriteController {

    private service = new FavoriteService();

    getAllFavorites(req: Request, res: Response): void {
        const favorites = this.service.getAllFavorites();
        res.json(favorites);
    }

    getFavoriteById(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const favorite = this.service.getFavoriteById(id);

        if (!favorite) {
            res.status(404).json({ message: "Favorite not found" });
            return;
        }

        res.json(favorite);
    }

}