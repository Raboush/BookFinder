import { Book } from "../models/Book";
import { SearchRepository } from "../repositories/SearchRepository";
import { BarycenterStrategy } from "../algorithms/BarycenterStrategy";

export class SearchService {

    private repository = new SearchRepository();
    private scoringStrategy = new BarycenterStrategy();

    searchBooks(title: string): Book[] {

        const books = this.repository.searchByTitle(title);

        books.forEach(book => {
            const score = this.scoringStrategy.score(book);
            console.log(`${book.title} -> Score: ${score}`);
        });

        return books;
    }

}