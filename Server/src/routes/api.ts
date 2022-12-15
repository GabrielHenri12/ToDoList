import { Router } from "express";
import * as tasksController from "../controller/tasksController";
import * as UserController from "../controller/UsersController";

const router = Router();

router.get('/ping', (req, res) => { res.json({ pong: true }) })
router.get('/tarefas', tasksController.all);
router.post('/tarefas', tasksController.add);
router.put('/tarefas/:id', tasksController.update);
router.delete('/tarefas/:id', tasksController.remove);

router.post('/register', UserController.Register);
router.post('/login', UserController.Login);

export default router;