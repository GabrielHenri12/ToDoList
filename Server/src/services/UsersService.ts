import { Users } from "../models/User";
import bcrypt from "bcrypt"

export const CreateUser = async (name: string, email: string, password: string) => {
    const hasUser = await Users.findOne({ where: { email } })
    if (!hasUser) {
        const hash = bcrypt.hashSync(password, 10)
        const newUser = await Users.create({
            name,
            email,
            password: hash
        })
        return newUser
    } else {
        return new Error('Email já existe')
    }
}

export const FindByEmail = async (email: string) => {
    return await Users.findOne({ where: { email } })
}

export const matchPassword = async (PasswordText: string, encripted: string) => {
    return bcrypt.compareSync(PasswordText, encripted);
}

export const all = async () => {
    return await Users.findAll()
}