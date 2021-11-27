// Model Imports
const db = require('../database/DB')

// Package Imports
const validator = require('validator')
const Password = require('../services/Password/Password')

class Registrar {
    static async Register(newUser) {

        // Validate Input
        if( !validator.isEmail(newUser.email) || newUser.password.length < 8 ) {
            return {
                status: 406
            }
        }

        // Check If Email Exists
        if( await db.UserEmailExists(newUser.email) ) {
            return {
                status:409
            }
        }

        // Register User
        const user = await db.CreateUser({
            email: newUser.email,
            hashed_password: await Password.hash(newUser.password)
        })

        // Check Registration
        if(user) {
            return {
                status:200,
                json: {
                    message: 'User Created'
                }
            }
        }
    }
}

module.exports = Registrar