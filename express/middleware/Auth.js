const WebToken = require("basic_mern_app/services/WebToken/WebToken")

class Auth {

    static async verifyToken(req, res, next) {

        const token = req.headers["x-access-token"]

        if(!token) {

            res.status(401).json({ message: "No Token Supplied" })

        } else {

            const decodedToken =  await WebToken.verify(token)
            
            if(decodedToken) {
                req.userId = decodedToken.userId
                req.tokenData = decodedToken
                next()
            } else {
                res.status(401).json({ message: "Issue with Token" })
            }

        }

    }
}

module.exports = Auth