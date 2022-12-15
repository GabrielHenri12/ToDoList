import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/postgre";

export interface TasksInstance extends Model {
    id: number,
    id_user: number,
    task: string,
    done: boolean
}

export const Tasks = sequelize.define<TasksInstance>("Tasks", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    id_user: { type: DataTypes.INTEGER },
    task: { type: DataTypes.STRING },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: "tasks",
    timestamps: false
}
)