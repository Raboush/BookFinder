import { Book } from "../models/Book";
import { IScoringStrategy } from "./IScoringStrategy";

export class Scorer {

    constructor(private strategy: IScoringStrategy) {}

    scoreBooks(books: Book[]): Map<Book, number> {

        const scores = new Map<Book, number>();

        books.forEach(book => {
            scores.set(book, this.strategy.score(book));
        });

        return scores;

    }

}