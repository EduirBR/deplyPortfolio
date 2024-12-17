import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Configuración para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;
        // Middlewares
        this.middlewares();

        // Redirigir todas las rutas a index.html
        this.app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "public", "index.html"));
        });
    }

    middlewares() {
        // Logging de peticiones
        this.app.use(morgan("dev")); // Añadir morgan aquí

        // Directorio Público para servir archivos estáticos
        this.app.use(
            "/assets",
            express.static(path.join(__dirname, "public", "assets", "assets"))
        );
        this.app.use(express.static(path.join(__dirname, "public")));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port);
        });
    }
}
