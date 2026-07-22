import { useState } from "react";
import "./App.css";

import type { Book } from "./models/Book";
import { SearchService } from "./services/SearchService";

function App() {

    const [title, setTitle] = useState("");
    const [books, setBooks] = useState<Book[]>([]);

    const service = new SearchService();

    const search = async () => {

        const result = await service.searchBooks(title);

        setBooks(result);

    };

    return (

        <div className="container">

            <h1>📚 Book Finder</h1>

            <div className="search">

                <label>Book title</label>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a book title"
                />

                <button onClick={search}>
                    Search
                </button>

            </div>

            <div className="results">

                <h2>Results</h2>

                {books.map((book) => (

                    <div key={book.id}>

                        <h3>{book.title}</h3>

                        <p><strong>Author:</strong> {book.author}</p>

                        <p><strong>Genre:</strong> {book.genre}</p>

                        <hr />

                    </div>

                ))}

            </div>

        </div>

    );

}

export default App;