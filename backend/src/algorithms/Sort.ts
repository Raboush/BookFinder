import { Book } from "../models/Book";

export class Sort {

    sortBooks(scores: Map<Book, number>): Book[] {

        return [...scores.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(entry => entry[0]);

    }

}