import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";

export const router = Router();

// List categories
router.get("/categories", listCategories);

// Create category
router.post("/categories", createCategory);

// List products
router.get("/products", (request, response) => {
  response.send("OK");
});

// Create product
router.post("/products", (request, response) => {
  response.send("OK");
});

// GET products by category
router.get("/categories/:categoryId/products", (request, response) => {
  response.send("OK");
});

// List orders
router.get("/orders", (request, response) => {
  response.send("OK");
});

// Create order
router.post("/orders", (request, response) => {
  response.send("OK");
});

// Change order status (PUT = Faz alterações em todas as linhas de uma tabela. PATH = faz alterações apenas no que é necessário "alteração parcial")
router.patch("/orders/:orderId", (request, response) => {
  response.send("OK");
});

// Delete/cancel order
router.delete("/orders/:orderId", (request, response) => {
  response.send("OK");
});
