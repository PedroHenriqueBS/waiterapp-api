import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
      return res.status(400).json({ error: "Status inválido" });
    }

    // Atualiza o status do pedido no banco de dados usando o modelo Order e retorna o documento atualizado
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }, // Retorna o documento atualizado após a modificação
    );

    res.sendStatus(204); // Retorna um status 204 (No Content) indicando que a atualização foi bem-sucedida, mas sem retornar nenhum conteúdo na resposta
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar status do pedido" });
  }
}
