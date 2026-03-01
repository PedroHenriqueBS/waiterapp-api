import { Router } from "express";
import multer from "multer";

import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";
import { listOrder } from "./app/useCases/orders/listOrders";
import { createOrder } from "./app/useCases/orders/createOrder";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";

export const router = Router();

const upload = multer({
  // Configuração do multer para armazenamento de arquivos
  storage: multer.diskStorage({
    // Configura o armazenamento dos arquivos usando o sistema de arquivos local
    destination(req, file, callback) {
      // Define o destino onde os arquivos serão armazenados
      callback(null, "uploads");
    },
    filename(req, file, callback) {
      // Define o nome do arquivo armazenado, usando um timestamp para evitar conflitos de nomes
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get("/categories", listCategories);

// Create category
router.post("/categories", createCategory);

// List products
router.get("/products", listProducts);

// Create product
router.post("/products", upload.single("image"), createProduct);

// GET products by category
router.get("/categories/:categoryId/products", listProductsByCategory);

// List orders
router.get("/orders", listOrder);

// Create order
router.post("/orders", createOrder);

// Change order status (PUT = Faz alterações em todas as linhas de uma tabela. PATH = faz alterações apenas no que é necessário "alteração parcial")
router.patch("/orders/:orderId", changeOrderStatus);

// Delete/cancel order
router.delete("/orders/:orderId", (request, response) => {
  response.send("OK");
});
