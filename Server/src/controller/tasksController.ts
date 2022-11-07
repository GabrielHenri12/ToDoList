import { Request, Response } from "express";
import { Tasks } from "../models/tasks";

export const all = async (req:Request, res:Response)=>{
    let tarefa = await Tasks.findAll();

    res.json({tarefa})
}

export const add = async (req:Request, res:Response)=>{
    const newTask = req.body
    console.log(newTask)

    if(newTask.task){
        let tarefa = await Tasks.create({
            task: newTask.task, 
            done: newTask.done ? true : false 
        });

        res.status(201).json({tarefa});
    }else {
        res.json({error: "Não foi adicionado uma tarefa"})
    }
}

export const update = async (req:Request, res:Response)=>{
    const id:string = req.params.id;
    let tarefa = await Tasks.findByPk(id);
    
    if(tarefa){
        if(req.body.task){
            tarefa.task = req.body.task 
        }

        if(req.body.done){
            switch(req.body.done.toLowerCase()){
                case 'true':
                case '1':
                    tarefa.done = true;
                    break;
                case 'false':
                case '0':
                    tarefa.done = false;
                    break;
            }
        }      
        await tarefa.save();
    }

    res.json({tarefa})
}

export const remove = async (req:Request, res:Response)=>{
    let {id} = req.params
    let tarefa = await Tasks.findByPk(id);

    if(tarefa){ await tarefa.destroy(); }
    
    res.json({})
}