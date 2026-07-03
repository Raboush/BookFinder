import { Favorite } from "../models/Favorite";

export interface IFavoriteRepository {

    getAll(): Favorite[];

    getById(id: number): Favorite | undefined;

}