import { Book } from "../models/Book";
import { Filter } from "./Filter";
import { Sort } from "./Sort";
import { Scorer } from "./Scorer";
import { BarycenterStrategy } from "./BarycenterStrategy";
import { Normalization } from "./Normalization";

export class RecommendationEngine {

    private filter = new Filter();
    private normalization = new Normalization();
    private scorer = new Scorer(new BarycenterStrategy());
    private sorter = new Sort();

    recommend(books: Book[]): Book[] {

        const filteredBooks = this.filter.filterByRating(books, 4);

        const normalizedBooks = this.normalization.normalize(filteredBooks);

        const scores = this.scorer.scoreBooks(normalizedBooks);

        return this.sorter.sortBooks(scores);

    }

}