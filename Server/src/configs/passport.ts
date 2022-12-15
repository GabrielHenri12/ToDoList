import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt"
import JWT from "jsonwebtoken";
import { Users } from "../models/User";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv"

dotenv.config()

export const generateToken = (data: object) => {
    return JWT.sign(data, process.env.JWT_KEY as string)
};


const notAuthorized = { status: 401, mensage: 'User not authorized' };
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY as string
};

passport.use(new Strategy(options, async (payload, done) => {
    const user = await Users.findByPk(payload.id);

    if (user) {
        return done(null, user);
    } else {
        return done(notAuthorized, false);
    };
}));

export const privatRoute = (req:Request, res:Response, next:NextFunction)=>{
    passport.authenticate('jwt', (err, user)=>{
        if(user){
            req.user = user.id;
            next();
        }else{
            next(notAuthorized);
        }
    })(req, res, next);
}