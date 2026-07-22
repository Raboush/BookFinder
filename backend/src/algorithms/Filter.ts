import { Book } from "../models/Book";

export class Filter {

    filterByRating(books: Book[], minimumRating: number): Book[] {

        return books.filter(book => book.rating >= minimumRating);

    }

}