import type { Book } from "../models/Book";

export class SearchService {

    async searchBooks(title: string): Promise<Book[]> {

        const response = await fetch(
            `http://localhost:3000/search?title=${title}`
        );

        const books: Book[] = await response.json();

        return books;

    }

}