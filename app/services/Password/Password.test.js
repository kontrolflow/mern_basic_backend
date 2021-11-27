const Password = require('./Password')

describe('Tests Password Class', () => {

    let hash

    beforeAll(async () => {
        hash = await Password.hash('asdfasdf')
    })
    
    it('Hashes a Password', async () => {
        const password = 'asdfasdf'
        expect(await Password.hash(password)).toEqual(expect.any(String))
    })

    it('Compare Correct Password', async () => {
        expect(await Password.compare('asdfasdf', hash))
        .toEqual(true)
    })

    it('Compare Incorrect Password', async () => {
        expect(await Password.compare('asdf', hash))
        .toEqual(false)
    })

})