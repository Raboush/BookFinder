import { Favorite } from "../models/Favorite";
import { FavoriteRepository } from "../repositories/FavoriteRepository";

export class FavoriteService {

    private repository = new FavoriteRepository();

    getAllFavorites(): Favorite[] {
        return this.repository.getAll();
    }

    getFavoriteById(id: number): Favorite | undefined {
        return this.repository.getById(id);
    }

}