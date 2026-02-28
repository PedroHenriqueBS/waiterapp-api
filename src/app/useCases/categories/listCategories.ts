import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function listCategories(req: Request, res: Response) {
  const categories = await Category.find(); // Busca todas as categorias no banco de dados usando o modelo Category

  res.json(categories);
}
