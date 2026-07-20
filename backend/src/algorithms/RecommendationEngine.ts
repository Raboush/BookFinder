import { Book } from "../models/Book";
import { Filter } from "./Filter";
import { Sort } from "./Sort";
import { Scorer } from "./Scorer";
import { BarycenterStrategy } from "./BarycenterStrategy";

export class RecommendationEngine {

    private filter = new Filter();
    private scorer = new Scorer(new BarycenterStrategy());
    private sorter = new Sort();

    recommend(books: Book[]): Book[] {

        const filteredBooks = this.filter.filterByRating(books, 4);

        const scores = this.scorer.scoreBooks(filteredBooks);

        return this.sorter.sortBooks(scores);

    }

}