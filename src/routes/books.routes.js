import { Router } from "express";
import booksController from "../controllers/books.controller.js"; // Certifique-se de que está importando corretamente

const router = Router();

router.get('/', booksController.index); // Agora sem o /livros
router.get('/:id', booksController.show);
router.post('/', booksController.store); // Sem o /livros
router.put('/:id', booksController.update);
router.delete('/:id', booksController.delete);

export default router; // Lembre-se de exportar o roteador corretamente
