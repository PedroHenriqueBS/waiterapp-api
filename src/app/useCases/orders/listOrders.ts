import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function listOrder(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 }) // Ordena os pedidos por data de criação em ordem crescente (do mais antigo para o mais recente)
      .populate("products.product"); // Busca todos os pedidos no banco de dados usando o modelo Order e popula os produtos associados a cada pedido para incluir os detalhes dos produtos na resposta

    res.status(200).json(orders); // Retorna um status 200 (OK) com a lista de pedidos em formato JSON
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar pedidos" });
  }
}
