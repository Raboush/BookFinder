import { Book } from "../models/Book";
import { SearchRepository } from "../repositories/SearchRepository";

export class SearchService {

    private repository = new SearchRepository();

    searchBooks(title: string): Book[] {
        return this.repository.searchByTitle(title);
    }

}