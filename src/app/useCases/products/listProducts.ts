import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find(); // Busca todos os produtos no banco de dados usando o modelo Product

    res.status(200).json(products); // Retorna um status 200 (OK) com a lista de produtos em formato JSON
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar produtos" });
  }
}
