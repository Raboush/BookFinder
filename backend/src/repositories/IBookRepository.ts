import { Book } from "../models/Book";

export interface IBookRepository {
  getAll(): Book[];
  getById(id: number): Book | undefined;
}