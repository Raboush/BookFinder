import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class CategoryService {

    private repository = new CategoryRepository();

    getAllCategories(): Category[] {
        return this.repository.getAll();
    }

    getCategoryById(id: number): Category | undefined {
        return this.repository.getById(id);
    }

}