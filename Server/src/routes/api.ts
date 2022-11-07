import { Router } from "express";
import * as tasksController from "../controller/tasksController";

const router = Router();

router.get('/tarefas', tasksController.all);
router.post('/tarefas', tasksController.add);
router.put('/tarefas/:id', tasksController.update);
router.delete('/tarefas/:id', tasksController.remove);

export default router;