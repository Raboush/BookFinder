import express from "express";
import bookRoutes from "./routes/book.routes";

const app = express();

app.use(express.json());

// Registrar las rutas
app.use(bookRoutes);

// Puerto del servidor
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});