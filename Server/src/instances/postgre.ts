import { Sequelize } from "sequelize";
import db from "./database";

export const sequelize = new Sequelize(
    db.db,
    db.user,
    db.password,
    {
        dialect: "postgres",
        port: parseInt(db.PORT)
    }
);