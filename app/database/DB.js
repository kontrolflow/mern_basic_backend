// Database Servers
const db = require('./servers/sql-server')

// Database Abstraction Class
class DB {

    static UserEmailExists(email) {
        return new Promise((resolve, reject)=>{
            let sql = 'SELECT * FROM users WHERE email = ?'
            db.query(sql, email,  (error, result) => {
                if(error){
                    console.log(error)
                    return resolve(false)
                }
                if(result.length>=1)  {
                    // console.log(result)
                    // user.id = result.insertId
                    return resolve(true)
                } else {
                    return resolve(false)
                }
            })
        })
    }

    static CreateUser(newUser) {
        return new Promise((resolve, reject)=>{
            let sql = 'INSERT INTO users SET ?'
            const user = {
                email:newUser.email,
                hashed_password:newUser.hashed_password
            }
            db.query(sql, user,  (error, result) => {
                if(error){
                    console.log(error)
                    return reject(error)
                }
                if(result.insertId)  {
                    user.id = result.insertId
                    return resolve(user)
                } else {
                    return resolve(false)
                }
            })
        })
    }

    static DeleteUserByEmail(email) {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM users WHERE email = ?'
            db.query(sql, email, (error, result) => {
                if(error) {
                    console.log(error)
                    return resolve(false)
                }
                if(result) {
                    // console.log(result)
                    return resolve(true)
                }
            })
        })
    }

    static getUserDataByEmail(email) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM users WHERE email = ?'
            db.query(sql, email, (err, result) => {
                if(err) {
                    return resolve(false)
                }
                if(result.length >= 1) {
                    return resolve(result[0])
                } else {
                    return resolve(false)
                }
            })
        })
    }
}

module.exports = DB