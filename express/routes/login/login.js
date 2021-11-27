// Imports for API Routing
const express = require('express');
const router = express.Router();

// App Imports
const {Authenticator} = require('basic_mern_app')

// Authenticate User
router.post('/', async (req, res, next) => {

    const credentials = req.body.credentials

    req.result = await Authenticator.Login(credentials)

    next()

})

module.exports = router