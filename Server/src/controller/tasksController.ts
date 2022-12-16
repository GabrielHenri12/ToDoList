import { Request, Response } from "express";
import * as TaskService from "../services/TaskService";

export const all = async (req: Request, res: Response) => {
    let id_user = req.user
    if (id_user) {
        let tarefa = await TaskService.allTasks(id_user);

        res.json({ tarefa })
    } else {
        res.json({ status: false })
    }
}

export const add = async (req: Request, res: Response) => {
    const { task, done } = req.body
    const id = req.user

    if (task && id) {
        let tarefa = await TaskService.addTask(id, task, done)

        res.status(201).json({ tarefa });
    } else {
        res.json({ error: "not add task" })
    }
}

export const update = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const { task, done } = req.body

    if (task && id) {
        let tarefa = await TaskService.updateTask(id, task, done)

        res.json({ tarefa })
    } else {
        res.json({ status: false })
    }

}

export const remove = async (req: Request, res: Response) => {
    let {id} = req.params

    if (id) {
        let status = await TaskService.deleteTask(id)
        return res.json({ status })
    } else {
        return res.json({ status: false, mensage: 'task not find' })
    }
}
