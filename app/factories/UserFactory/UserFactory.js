const User = require('../../models/User')
const DB = require('../../database/DB')

class UserFactory {

    static async getByEmail(email) {
        const userData = await DB.getUserDataByEmail(email)
        if(userData) {
            const user = new User(userData)
            return user
        } else {
            return false
        }
    }

}

module.exports = UserFactory