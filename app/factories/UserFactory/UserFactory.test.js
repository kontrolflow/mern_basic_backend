const UserFactory = require('./UserFactory')

describe('Tests User Factory', () => {

    it('Gets User By Email', async () => {
        const email = 'jullianabinsay@gmail.com'
        const user = await UserFactory.getByEmail(email)
        expect(user.constructor.name).toEqual('User')
        expect(user).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                email: expect.any(String)
            })
        )
    })

})