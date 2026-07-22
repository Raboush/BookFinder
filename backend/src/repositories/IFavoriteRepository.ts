import { Favorite } from "../models/Favorite";

export interface IFavoriteRepository {

    getAll(): Favorite[];

    getById(id: number): Favorite | undefined;

    getByUserId(userId: number): Favorite[];

}