import { Book } from "../models/Book";
import { BookRepository } from "../repositories/BookRepository";
import { RepositoryFactory } from "../factories/RepositoryFactory";

export class BookService {

    private repository: BookRepository = RepositoryFactory.createBookRepository();

    getAllBooks(): Book[] {
        return this.repository.getAll();
    }

    getBookById(id: number): Book | undefined {
        return this.repository.getById(id);
    }

}