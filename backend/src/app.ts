import express from "express";

import bookRoutes from "./routes/book.routes";
import categoryRoutes from "./routes/category.routes";
import userRoutes from "./routes/user.routes";
import favoriteRoutes from "./routes/favorite.routes";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(bookRoutes);
app.use(categoryRoutes);
app.use(userRoutes);
app.use(favoriteRoutes);

// Port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});