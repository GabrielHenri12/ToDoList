import request from "supertest";
import App from "../App"
import { Users } from "../models/User";

describe('testing api routes', ()=>{

    beforeAll(async()=>{
        await Users.sync({force: true})
    });

    it('should ping pong', (done)=>{
        request(App)
            .get('/ping')
            .then(response => {
                expect(response.body.pong).toBeTruthy()
                return done();
            })
    });

    it('should register new user', (done)=>{
        request(App)
            .post('/register')
            .send(`name=Gabriel&email=test2@jest.com&password=654321`)
            .then(response => {
                expect(response.body.newUser).toHaveProperty('id')
                return done();
            })
    });

    it('should not register new user', (done)=>{
        request(App)
            .post('/register')
            .send(`name=Gabriel&email=test2@jest.com&password=654321`)
            .then(response => {
                expect(response.body).toHaveProperty('error')
                return done();
            })
    });

    it('should login corretly', (done)=>{
        request(App)
            .post('/login')
            .send(`email=test2@jest.com&password=654321`)
            .then(response => {
                expect(response.body.status).toBeTruthy();
                return done();
            })
    });

    it('should login incorretly', (done)=>{
        request(App)
            .post('/login')
            .send(`email=test2@jest.com&password=invalid`)
            .then(response => {
                expect(response.body.status).toBeFalsy();
                return done();
            })
    });

});