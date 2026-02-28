import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body; // Extrai os campos "icon" e "name" do corpo da requisição

    const category = await Category.create({ icon, name }); // Cria uma nova categoria no banco de dados usando o modelo Category
    res.sendStatus(201).json(category); // Retorna um status 201 (Created) com a categoria criada em formato JSON
  } catch (error) {
    res.sendStatus(500).json({ error: "Erro ao criar categoria" }); // Em caso de erro, retorna um status 500 (Internal Server Error) com uma mensagem de erro
  }
}
