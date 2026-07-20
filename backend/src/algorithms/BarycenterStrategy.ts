import { Book } from "../models/Book";
import { IScoringStrategy } from "./IScoringStrategy";

export class BarycenterStrategy implements IScoringStrategy {

    score(book: Book): number {

        return (
            book.rating +
            book.popularity +
            book.difficulty +
            book.innovation
        ) / 4;

    }

}