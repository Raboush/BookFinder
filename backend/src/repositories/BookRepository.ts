import { Book } from "../models/Book";
import { IBookRepository } from "./IBookRepository";

export class BookRepository implements IBookRepository {

    private books: Book[] = [
        {
            id: 1,
            title: "Clean Code",
            author: "Robert C. Martin",
            genre: "Programming",
            rating: 5
        },
        {
            id: 2,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            rating: 5
        }
    ];

    getAll(): Book[] {
        return this.books;
    }

    getById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

}