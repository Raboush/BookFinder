import { Book } from "../models/Book";
import { UserProfile } from "../models/UserProfile";
import { Favorite } from "../models/Favorite";
import { FavoriteRepository } from "../repositories/FavoriteRepository";
import { BookRepository } from "../repositories/BookRepository";
import { RepositoryFactory } from "../factories/RepositoryFactory";

export class UserProfileService {

    private favoriteRepository: FavoriteRepository = RepositoryFactory.createFavoriteRepository();
    private bookRepository: BookRepository = RepositoryFactory.createBookRepository();

    getFavoriteBooks(userId: number): Book[] {

        const favorites: Favorite[] = this.favoriteRepository.getByUserId(userId);

        const books: Book[] = [];

        favorites.forEach(favorite => {

            const book = this.bookRepository.getById(favorite.bookId);

            if (book) {
                books.push(book);
            }

        });

        return books;

    }

    calculateProfile(userId: number): UserProfile {

        const books = this.getFavoriteBooks(userId);

        if (books.length === 0) {
            return {
                rating: 0,
                popularity: 0,
                difficulty: 0,
                innovation: 0
            };
        }

        let rating = 0;
        let popularity = 0;
        let difficulty = 0;
        let innovation = 0;

        books.forEach(book => {
            rating += book.rating;
            popularity += book.popularity;
            difficulty += book.difficulty;
            innovation += book.innovation;
        });

        return {
            rating: rating / books.length,
            popularity: popularity / books.length,
            difficulty: difficulty / books.length,
            innovation: innovation / books.length
        };

    }

}