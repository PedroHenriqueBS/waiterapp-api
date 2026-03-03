import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express(); // Cria uma instância do Express para configurar o servidor HTTP
    const port = 3001;

    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*"); // Permite que qualquer origem acesse os recursos do servidor (CORS)
      res.header("Access-Control-Allow-Methods", "*"); // Permite que qualquer método HTTP seja utilizado nas requisições (CORS)
      res.header("Access-Control-Allow-Headers", "*"); // Permite que qualquer cabeçalho seja utilizado nas requisições (CORS)
      next();
    });

    app.use("/uploads", express.static("uploads")); // Configura o Express para servir arquivos estáticos da pasta "uploads" quando a rota "/uploads" for acessada
    app.use(express.json()); // Permite que o Express entenda requisições com corpo em formato JSON
    app.use(router); // Registra as rotas definidas no arquivo router.ts

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log("Erro ao conectar ao mongo!"));
