import express from "express";
import cors from "cors";

import bookRoutes from "./routes/book.routes";
import categoryRoutes from "./routes/category.routes";
import userRoutes from "./routes/user.routes";
import favoriteRoutes from "./routes/favorite.routes";
import searchRoutes from "./routes/search.routes";

const app = express();

// CORS
app.use(cors());

app.use((req, res, next) => {
    console.log("Request:", req.method, req.url);
    next();
});

app.use(express.json());

// Routes
app.use(bookRoutes);
app.use(categoryRoutes);
app.use(userRoutes);
app.use(favoriteRoutes);
app.use(searchRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});