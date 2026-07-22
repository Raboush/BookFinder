import { Favorite } from "../models/Favorite";
import { IFavoriteRepository } from "./IFavoriteRepository";

export class FavoriteRepository implements IFavoriteRepository {

    private favorites: Favorite[] = [
        {
            id: 1,
            userId: 1,
            bookId: 2
        },
        {
            id: 2,
            userId: 2,
            bookId: 1
        }
    ];

    getAll(): Favorite[] {
        return this.favorites;
    }

    getById(id: number): Favorite | undefined {
        return this.favorites.find(favorite => favorite.id === id);
    }

    getByUserId(userId: number): Favorite[] {
    return this.favorites.filter(favorite => favorite.userId === userId);
}

}