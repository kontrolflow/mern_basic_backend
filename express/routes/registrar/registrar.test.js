const request = require('supertest')
const http = require('../../http_test')

// Imports for Test Cleanup 
const DB = require('../../../app/database/DB')

describe('Register User', () => {

    it('POST /registar --> Successful Registration', () => {
        const req = {
            newUser: {
                email: 'user@emailserver.com',
                password: 'asdfasdf'
            }
        }

        return request(http)
            .post('/registrar')
            .send(req)
            .expect('Content-Type', /json/)
            .expect(200)
            // .then((response) => {
            //     expect(response.body).toEqual(
            //         expect.objectContaining({
            //             errors: expect.array
            //         })
            //     )
            // })
    })

    it('POST /registar --> Invalid Email', () => {

        const req = {
            newUser: {
                email: 'jullianabinsay.com',
                password: 'asdfasdf'
            }
        }

        return request(http)
            .post('/registrar')
            .send(req)
            .expect(406)

    })

    it('POST /registar --> Invalid Password', () => {
        const req = {
            newUser: {
                email: 'jullianabinsay.com',
                password: 'as'
            }
        }

        return request(http)
            .post('/registrar')
            .send(req)
            .expect(406)

    })

    it('POST /registar --> Email Taken', () => {
        const req = {
            newUser: {
                email: 'jullianabinsay@gmail.com',
                password: 'asdfasdf'
            }
        }

        return request(http)
            .post('/registrar')
            .send(req)
            .expect(409)

    })

    it('Tests Ext', () => {
        expect(1).toEqual(1)
    })

    afterAll(async () => {
        if(await DB.DeleteUserByEmail('user@emailserver.com')) {
           
        } else {
            console.log('Unsuccessfully Deleted Test User')
        }
    })

})