import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename; // Obtém o nome do arquivo da imagem enviada
    const { name, description, price, category, ingredients } = req.body; // Extrai os campos do corpo da requisição

    const product = await Product.create({
      name,
      description,
      imagePath: imagePath || "", // Define o caminho da imagem ou uma string vazia se não houver imagem
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [], // Converte a string de ingredientes em um array de objetos usando JSON.parse
    });

    res.status(201).json(product); // Retorna o produto criado em formato JSON
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar produto" });
  }
}
