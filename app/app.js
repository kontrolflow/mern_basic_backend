require('dotenv').config()

const Registrar = require('./controllers/Registrar')
exports.Registrar = Registrar

const Authenticator = require('./controllers/Authenticator')
exports.Authenticator = Authenticator