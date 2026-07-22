import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";

export class CategoryController {

    private service = new CategoryService();

    getAllCategories(req: Request, res: Response): void {
        const categories = this.service.getAllCategories();
        res.json(categories);
    }

    getCategoryById(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const category = this.service.getCategoryById(id);

        if (!category) {
            res.status(404).json({ message: "Category not found" });
            return;
        }

        res.json(category);
    }

}