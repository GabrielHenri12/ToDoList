import { Request, Response } from "express";
import { Tasks } from "../models/tasks";

export const all = async (req: Request, res: Response) => {
    let tarefa = await Tasks.findAll({ where: { id_user: req.user } });

    res.json({ tarefa })
}

export const add = async (req: Request, res: Response) => {
    const newTask = req.body

    if (newTask.task) {
        let tarefa = await Tasks.create({
            id_user: req.user,
            task: newTask.task,
            done: newTask.done ? true : false
        });

        res.status(201).json({ tarefa });
    } else {
        res.json({ error: "Não foi adicionado uma tarefa" })
    }
}

export const update = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    let tarefa = await Tasks.findByPk(id);

    if (tarefa) {
        if (req.body.task) {
            tarefa.task = req.body.task
        }
        switch (req.body.done) {
            case 'true':
            case '1':
            case true:
                tarefa.done = true;
                break;
            case 'false':
            case '0':
            case false:
                tarefa.done = false;
                break;
        }
        await tarefa.save();
    }

    res.json({ tarefa })
}

export const remove = async (req: Request, res: Response) => {
    let { id } = req.params
    let tarefa = await Tasks.findByPk(id);

    if (tarefa) { await tarefa.destroy(); }

    res.json({})
}