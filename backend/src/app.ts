import express from "express";

import bookRoutes from "./routes/book.routes";
import categoryRoutes from "./routes/category.routes";

const app = express();

app.use(express.json());

// Routes
app.use(bookRoutes);
app.use(categoryRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});