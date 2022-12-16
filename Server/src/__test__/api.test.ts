import request from "supertest";
import App from "../App";
import * as UsersService from "../services/UsersService";
import { Users } from "../models/User";
import { response } from "express";

describe('testing api routes', () => {

    beforeAll(async () => {
        await Users.sync({ force: true })
    });

    it('should ping pong', (done) => {
        request(App)
            .get('/ping')
            .then(response => {
                expect(response.body.pong).toBeTruthy()
                return done();
            })
    });

    it('should register new user', (done) => {
        request(App)
            .post('/register')
            .send(`name=Gabriel&email=test2@jest.com&password=654321`)
            .then(response => {
                expect(response.body).toHaveProperty('newUser');
                expect(response.body).not.toHaveProperty('error');
                return done();
            })
    });

    it('should not register new user', (done) => {
        request(App)
            .post('/register')
            .send(`name=Gabriel&email=test2@jest.com&password=654321`)
            .then(response => {
                expect(response.body).toHaveProperty('error')
                return done();
            })
    });

    it('should login corretly', (done) => {
        request(App)
            .post('/login')
            .send(`email=test2@jest.com&password=654321`)
            .then(response => {
                expect(response.body.status).toBeTruthy();
                return done();
            })
    });

    it('should login incorretly', (done) => {
        request(App)
            .post('/login')
            .send(`email=test2@jest.com&password=invalid`)
            .then(response => {
                expect(response.body.status).toBeFalsy();
                return done();
            })
    });

    it('should add new task and send token', async () => {
        let token = await UsersService.setToken('test2@jest.com')
        let res = await request(App)
            .post('/tarefas')
            .set('Authorization', 'bearer ' + token)
            .send({ task: 'test of send task with token for authorize' })
            .then(response => response.body)
        expect(res).toHaveProperty('tarefa')
    })

    it('should modify the task befor', async () => {
        let token = await UsersService.setToken('test2@jest.com')
        let res = await request(App)
            .put('/tarefas/1')
            .set('Authorization', 'bearer ' + token)
            .send({ task: 'task modified' })
            .then(response => response.body)
        expect(res.tarefa.task).toBe('task modified')
    })

    it('should delete task', async () => {
        let token = await UsersService.setToken('test2@jest.com')
        let res = await request(App)
            .delete('/tarefas/1')
            .set('Authorization', 'bearer ' + token)
            .then(response => response.body)
        expect(res.status).toBeTruthy();
    })

});
