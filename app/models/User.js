class User {

    constructor(data) {
        this.id = data.id
        this.email = data.email
        this.hashed_password = data.hashed_password
    }

} 

module.exports = User