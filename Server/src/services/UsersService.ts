import { Users } from "../models/User";
import bcrypt from "bcrypt"
import { generateToken } from "../configs/passport";

export const CreateUser = async (name: string, email: string, password: string) => {
    
    const hasUser = await Users.findOne({ where: { email } })
    if (!hasUser) {
        const hash = bcrypt.hashSync(password, 10)
        const token = generateToken({email})
        const newUser = await Users.create({
            name,
            email,
            password: hash,
            token
        })
        return newUser
    } else {
        return new Error('Email já existe')
    }
}

export const FindByEmail = async (email: string) => {
    return await Users.findOne({ where: { email } })
}

export const setToken = async (email: string) => {
    let user = await FindByEmail(email)
    if(user){
        let newToken = generateToken({email})
        user.token = newToken
        user.save()
        return newToken
    }
}

export const matchPassword = async (PasswordText: string, encripted: string) => {
    return bcrypt.compareSync(PasswordText, encripted);
}

export const all = async () => {
    return await Users.findAll()
}