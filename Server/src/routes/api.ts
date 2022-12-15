import { Router } from "express";
import { privatRoute } from "../configs/passport";
import * as tasksController from "../controller/tasksController";
import * as UserController from "../controller/UsersController";

const router = Router();

router.get('/ping', (req, res) => { res.json({ pong: true }) })
router.get('/tarefas', privatRoute, tasksController.all);
router.post('/tarefas', privatRoute, tasksController.add);
router.put('/tarefas/:id', privatRoute, tasksController.update);
router.delete('/tarefas/:id', privatRoute, tasksController.remove);

router.post('/register', UserController.Register);
router.post('/login', UserController.Login);

export default router;