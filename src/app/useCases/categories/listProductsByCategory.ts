import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params; // Obtém o valor do parâmetro "categoryId" da requisição usando "req.params.categoryId"
    const products = await Product.find() // Busca todos os produtos no banco de dados usando o modelo Product
      .where("category") // Filtra os produtos para incluir apenas aqueles cuja categoria seja igual ao valor do parâmetro "categoryId" da requisição
      .equals(categoryId); // Obtém o valor do parâmetro "categoryId" da requisição usando "req.params.categoryId"

    res.json(products); // Retorna um status 200 (OK) com a lista de produtos em formato JSON
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar produtos" });
  }
}
