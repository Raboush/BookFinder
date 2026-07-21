import { BookRepository } from "../repositories/BookRepository";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { FavoriteRepository } from "../repositories/FavoriteRepository";
import { SearchRepository } from "../repositories/SearchRepository";
import { UserRepository } from "../repositories/UserRepository";

export class RepositoryFactory {

    static createBookRepository(): BookRepository {
        return new BookRepository();
    }

    static createCategoryRepository(): CategoryRepository {
        return new CategoryRepository();
    }

    static createFavoriteRepository(): FavoriteRepository {
        return new FavoriteRepository();
    }

    static createSearchRepository(): SearchRepository {
        return new SearchRepository();
    }

    static createUserRepository(): UserRepository {
        return new UserRepository();
    }

}