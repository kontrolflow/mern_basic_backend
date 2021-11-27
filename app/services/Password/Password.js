// Purpose
// - Hash Passwords for new Users before persisting
// - Compare Passwords for User Authenticaiton

const bcrypt = require('bcryptjs')

class Password {

    static async hash(password) {
        const hashedPassword = await bcrypt.hash(password, 10)
        return hashedPassword
    }

    static compare(input, hash) {
        return new Promise((resolve,reject) => {
            bcrypt.compare(input, hash, (err, resp) => {
                // Issue Running Comparison
                if (err) {
                    return resolve(false)
                }
        
                // If Passwords Match
                if (resp) {
                    return resolve(true)
                } else {
                    return resolve(false)
                }
            })
        })
    }

}

module.exports = Password