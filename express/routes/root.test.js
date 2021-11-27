const request = require('supertest')
const http = require('../http_test')

describe('Root Route', () => {

    it('GET / --> Checks Root Route', () => {
        return request(http)
            .get('/')
            .expect('Content-Type', /text/)
            .expect(200)
    })

})