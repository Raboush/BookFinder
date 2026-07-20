import { Book } from "../models/Book";
import { ISearchRepository } from "./ISearchRepository";

export class SearchRepository implements ISearchRepository {

    private books: Book[] = [
        {
            id: 1,
            title: "Clean Code",
            author: "Robert C. Martin",
            genre: "Programming",
            rating: 5,
            popularity: 95,
            difficulty: 80,
            innovation: 90
        },
        {
            id: 2,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            rating: 5,
            popularity: 98,
            difficulty: 40,
            innovation: 85
        }
    ];

    searchByTitle(title: string): Book[] {
        return this.books.filter(book =>
            book.title.toLowerCase().includes(title.toLowerCase())
        );
    }

}