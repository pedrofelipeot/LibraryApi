import { Router } from "express";
import booksController from "../controllers/books.controller.js"; 

const router = Router();

router.get('/', booksController.index); 
router.get('/:id', booksController.show);
router.post('/', booksController.store); 
router.put('/:id', booksController.update);
router.delete('/:id', booksController.delete);

export default router; 
