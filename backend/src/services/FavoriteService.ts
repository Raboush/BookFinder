import { Favorite } from "../models/Favorite";
import { FavoriteRepository } from "../repositories/FavoriteRepository";
import { RepositoryFactory } from "../factories/RepositoryFactory";

export class FavoriteService {

    private repository: FavoriteRepository = RepositoryFactory.createFavoriteRepository();

    getAllFavorites(): Favorite[] {
        return this.repository.getAll();
    }

    getFavoriteById(id: number): Favorite | undefined {
        return this.repository.getById(id);
    }

}