import { Book } from "../models/Book";
import { FavoriteRepository } from "../repositories/FavoriteRepository";
import { BookRepository } from "../repositories/BookRepository";

export class UserProfileService {

    private favoriteRepository = new FavoriteRepository();
    private bookRepository = new BookRepository();

    getFavoriteBooks(userId: number): Book[] {

        return [];

    }

}