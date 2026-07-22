import { Request, Response } from "express";
import { SearchService } from "../services/SearchService";

export class SearchController {

    private service = new SearchService();

    search(req: Request, res: Response): void {

        const title = req.query.title as string;

        if (!title) {
            res.status(400).json({
                message: "Title parameter is required"
            });
            return;
        }

        const books = this.service.searchBooks(title);

        res.json(books);
    }

}