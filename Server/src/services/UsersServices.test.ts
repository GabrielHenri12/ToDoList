import * as UsersService from "./UsersService"
import { Users, UsersInstances } from "../models/User"

describe('testing functions of users', ()=>{

    let name = "GH";
    let email = "teste@jest.com";
    let password = "4321";

    beforeAll(async()=>{
        await Users.sync({force: true})
    });

    it('should create a new user', async()=>{
        let newUser = await UsersService.CreateUser(name, email, password) as UsersInstances;
        expect(newUser).not.toBeInstanceOf(Error);
        expect(newUser).toHaveProperty('id');
        expect(newUser.email).toBe(email);
    });

    it('should return error because email existing', async()=>{
        let newUser = await UsersService.CreateUser(name, email, password);
        expect(newUser).toBeInstanceOf(Error);
    });

    it('should find user by email', async()=>{
        let user = await UsersService.FindByEmail(email) as UsersInstances;
        expect(user.email).toBe(email);
    });

    it('should match the password from database', async()=>{
        let user = await UsersService.FindByEmail(email) as UsersInstances;
        let match = await UsersService.matchPassword(password, user.password);
        expect(match).toBeTruthy();
    });

    it('should not match the password from database', async()=>{
        let user = await UsersService.FindByEmail(email) as UsersInstances;
        let match = await UsersService.matchPassword('invalid', user.password);
        expect(match).toBeFalsy();
    });

    it('should get list of users', async()=>{
        let list = await UsersService.all();
        expect(list.length).toBeGreaterThanOrEqual(1)
    })
})