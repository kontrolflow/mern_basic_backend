const UserFactory = require('../factories/UserFactory/UserFactory')

// Service Providers
const Password = require("../services/Password/Password")
const WebToken = require("../services/WebToken/WebToken")

class Authenticator {

    static Login(credentials) {
        return new Promise(async (resolve, reject) => {

            // Get User From Email
            const user = await UserFactory.getByEmail(credentials.email)
            if(!user) {
                return resolve({status: 404})
            }
    
            // Compare Passwords
            if(await Password.compare(credentials.password, user.hashed_password)) {
                // Create and Send Token
                const token = WebToken.create({userId: user.id})
                return resolve({json: {
                    token: token
                }})
            } else {
                return resolve({status: 404})
            }


        })
    }

}

module.exports = Authenticator