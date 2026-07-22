import { Book } from "../models/Book";

export class Normalization {

    normalize(books: Book[]): Book[] {

        return books.map(book => ({

            ...book,

            rating: book.rating / 5,
            popularity: book.popularity / 5,
            difficulty: book.difficulty / 5,
            innovation: book.innovation / 5

        }));

    }

}