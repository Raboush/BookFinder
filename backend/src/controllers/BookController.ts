import { Request, Response } from "express";
import { BookService } from "../services/BookService";

export class BookController {

    private service = new BookService();

    getAllBooks(req: Request, res: Response): void {
        const books = this.service.getAllBooks();
        res.json(books);
    }

    getBookById(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const book = this.service.getBookById(id);

        if (!book) {
            res.status(404).json({ message: "Book not found" });
            return;
        }

        res.json(book);
    }

}