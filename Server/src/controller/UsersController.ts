import * as UsersService from "../services/UsersService";
import { Request, Response } from "express";

export const Register = async (req: Request, res: Response) => {
    if (req.body.email && req.body.password) {
        let { name, email, password } = req.body;
        const newUser = await UsersService.CreateUser(name, email, password);

        if (newUser instanceof Error) {
            return res.json({ error: newUser.message });
        } else {
            return res.json({ newUser: newUser.dataValues.token });
        };

    } else {
        return res.json({ error: 'Infos invalid' });
    };
};

export const Login = async (req: Request, res: Response) => {
    if (req.body.email && req.body.password) {
        const { email, password } = req.body;
        const user = await UsersService.FindByEmail(email);

        if (user && await UsersService.matchPassword(password, user.password)) {
            let token = await UsersService.setToken(email)
            return res.json({ status: true, token });
        } else {
            return res.json({ status: false });
        };
    };
};

export const allUsers = async (req: Request, res: Response) => {
    let Users = await UsersService.all()
    let list: string[] = []

    for (let i in Users) {
        list.push(Users[i].email);
    };

    res.json({ list });
}