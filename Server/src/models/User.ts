import { sequelize } from "../instances/postgre";
import { Model, DataTypes } from "sequelize";

export interface UsersInstances extends Model {
    id: number,
    name: string,
    email: string,
    password: string
}

export const Users = sequelize.define<UsersInstances>('Users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING }
},
    {
        tableName: "Users",
        timestamps: false
    }
)