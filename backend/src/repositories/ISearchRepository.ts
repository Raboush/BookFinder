import { Book } from "../models/Book";

export interface ISearchRepository {

    searchByTitle(title: string): Book[];

}