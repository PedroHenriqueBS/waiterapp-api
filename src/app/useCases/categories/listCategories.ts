import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find(); // Busca todas as categorias no banco de dados usando o modelo Category

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar categorias" });
  }
}
