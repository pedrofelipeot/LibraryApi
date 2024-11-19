import loansController from "../controllers/loans.controller.js";
import { Router } from "express";

const router = Router();

// Relatórios
router.get('/usuarios-pendentes', loansController.usuariosComPendencias); // Relatório de usuários com pendências
router.get('/livros-mais-emprestados', loansController.livrosMaisEmprestados); // Relatório de livros mais emprestados

// Empréstimos
router.post('/', loansController.registrarEmprestimo); // Registrar novo empréstimo
router.put('/:id', loansController.registrarDevolucao); // Registrar devolução de empréstimo

export default router;
