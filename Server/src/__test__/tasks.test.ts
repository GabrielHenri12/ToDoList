import { response } from "express"
import request from "supertest"
import App from "../App"
import { Tasks } from "../models/tasks"

describe('testing controller tasks', () => {

    beforeAll(async () => {
        await Tasks.sync({force: true })
    })

    it('shold haved propriety email', () => {
        let i = 1+1
        expect(i).toBe(2)   
    })
    
})