const request = require('supertest')
const http = require('../../http_test')

describe('Test Secured Endpoint', () => {

    let goodToken

    beforeAll(() => {
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
                goodToken = {
                    "x-access-token":response.body.token
                }
            })

    })

    it('GET /secured --> No Token Supplied', () => {
        return request(http)
            .get('/secured')
            .expect('Content-Type', /json/)
            .expect(401)
    })

    it('GET /secured --> Erroneous Token Supplied', () => {

        const badToken = {
            "x-access-token":"asdfasdfasdf"
        }

        return request(http)
            .get('/secured')
            .set(badToken)
            .expect('Content-Type', /json/)
            .expect(401)
    })

    it('GET /secure --> Proper Token Supplied', () => {


        return request(http)
            .get('/secured')
            .set(goodToken)
            .expect('Content-Type', /json/)
            .expect(200)
    })

})