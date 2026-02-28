import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express(); // Cria uma instância do Express para configurar o servidor HTTP
    const port = 3001;

    app.use("/uploads", express.static("uploads")); // Configura o Express para servir arquivos estáticos da pasta "uploads"
    app.use(express.json()); // Permite que o Express entenda requisições com corpo em formato JSON
    app.use(router); // Registra as rotas definidas no arquivo router.ts

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log("Erro ao conectar ao mongo!"));
