const request = require('supertest')
const http = require('../../http_test')

describe('Log User In', () => {

    it('POST /login --> Successful Login', () => {

        const req = {
            credentials: {
                email: 'jullianabinsay@gmail.com',
                password: 'asdfasdf'
            }
        }

        return request(http)
            .post('/login')
            .send(req)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body.token).toEqual(expect.any(String))
            })


    })

    it('POST /login --> Nonexistant User', () => {

        const req = {
            credentials: {
                email: 'jullian..abinsay@gmail.com',
                password: 'asdfasdf'
            }
        }

        return request(http)
            .post('/login')
            .send(req)
            .expect(404)

    })

    it('POST /login --> Incorrect Password', () => {

        const req = {
            credentials: {
                email: 'jullianabinsay@gmail.com',
                password: 'asdfas'
            }
        }

        return request(http)
            .post('/login')
            .send(req)
            .expect(404)

    })

})