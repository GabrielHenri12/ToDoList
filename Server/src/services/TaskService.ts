import { Tasks } from "../models/tasks";

export const addTask = async (id_user: any, task: string, done: boolean = false) => {
    let newTask = await Tasks.create({
        id_user,
        task,
        done
    })
    return newTask
}

export const findById = async (id:any) => {
    let task = await Tasks.findByPk(id);
    return task;
}

export const updateTask = async (id_task: any, task: string, done: boolean = false) => {
    let taskForUpdate = await findById(id_task);
    if (taskForUpdate) {
        taskForUpdate.task = task;
        taskForUpdate.done = done;
        taskForUpdate.save();
        return taskForUpdate;
    }
}

export const deleteTask = async (id_task: any) => {
    let taskDelete = await findById(id_task)
    if (taskDelete) {
        await Tasks.destroy({ where: { id: id_task } })
        return { status: true }
    } else {
        return { status: false, mensage: 'task not found' }
    }
}

export const allTasks = async (id_user: any) => {
    let all = await Tasks.findAll({ where: { id_user } })
    return all
}