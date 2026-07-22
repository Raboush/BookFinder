import { Book } from "../models/Book";
import { SearchRepository } from "../repositories/SearchRepository";
import { RepositoryFactory } from "../factories/RepositoryFactory";
import { RecommendationEngine } from "../algorithms/RecommendationEngine";

export class SearchService {

    private repository: SearchRepository = RepositoryFactory.createSearchRepository();
    private recommendationEngine = new RecommendationEngine();

    searchBooks(title: string): Book[] {

        const books = this.repository.searchByTitle(title);

        return this.recommendationEngine.recommend(books);

    }

}