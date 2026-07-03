import { Book } from "../models/Book";
import { BookRepository } from "../repositories/BookRepository";

export class BookService {

    private repository = new BookRepository();

    getAllBooks(): Book[] {
        return this.repository.getAll();
    }

    getBookById(id: number): Book | undefined {
        return this.repository.getById(id);
    }

}