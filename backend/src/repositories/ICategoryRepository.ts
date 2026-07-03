import { Category } from "../models/Category";

export interface ICategoryRepository {

    getAll(): Category[];

    getById(id: number): Category | undefined;

}