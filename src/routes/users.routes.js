import usersController from "../controllers/users.controller.js";
import { Router } from "express";

const router = Router()

router.get('/', usersController.index)
router.get('/:id' , usersController.show)
router.post('/' , usersController.store)
router.put(':/id' , usersController.update)
router.delete('/:id' , usersController.delete)

export default router
