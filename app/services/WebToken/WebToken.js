const jwt = require('jsonwebtoken')

class WebToken {

    static create(data) {

        const token = jwt.sign(data, process.env.JWT_Secret, {
            expiresIn: 43200,
        })

        return token

    }

    static verify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.JWT_Secret, (err, decoded) => {
                if(err) {
                    return resolve(false)
                } else {
                    return resolve(decoded)
                }
            })
        })
    }

}
module.exports = WebToken