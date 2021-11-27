require('dotenv').config()

const WebToken = require('./WebToken')

describe('Tests the WebToken Class', () => {

    let token

    beforeAll(async () => {
        const data = {
            userId: 1
        }
        token = await WebToken.create(data)
    })

    it('Creates a Token', () => {
        const data = {
            userId: 1
        }
        expect(WebToken.create(data)).toEqual(expect.any(String))
    })

    it('Decodes a Token', async () => {
        expect(await WebToken.verify(token)).toEqual(
            expect.objectContaining({
                userId: expect.any(Number)
            })
        )
    })

})