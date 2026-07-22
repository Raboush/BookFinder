import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";
import { RepositoryFactory } from "../factories/RepositoryFactory";

export class CategoryService {

    private repository: CategoryRepository = RepositoryFactory.createCategoryRepository();

    getAllCategories(): Category[] {
        return this.repository.getAll();
    }

    getCategoryById(id: number): Category | undefined {
        return this.repository.getById(id);
    }

}