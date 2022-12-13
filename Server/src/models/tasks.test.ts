import { Tasks } from "./tasks";

describe('testing models objects', () => {

    beforeAll(async () => {
        await Tasks.create({
            task: "Isso tem que da certo",
            done: false
        })
    })

    it('shold haved propriety email', async () => {

        let response = await Tasks.findAll()
        expect(response[0]).toHaveProperty('done')
        expect(response[0]).toHaveProperty('task')
        expect(response[0]).toHaveProperty('id')
    })
    afterAll(async () => {
        await Tasks.destroy({where: {task: "Isso tem que da certo"}})
    })
})