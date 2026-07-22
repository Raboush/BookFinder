import { Category } from "../models/Category";
import { ICategoryRepository } from "./ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {

    private categories: Category[] = [
        {
            id: 1,
            name: "Programming"
        },
        {
            id: 2,
            name: "Fantasy"
        },
        {
            id: 3,
            name: "Science Fiction"
        },
        {
            id: 4,
            name: "History"
        }
    ];

    getAll(): Category[] {
        return this.categories;
    }

    getById(id: number): Category | undefined {
        return this.categories.find(category => category.id === id);
    }

}