// Imports for API Routing
const express = require('express');
const router = express.Router();

// App Imports
const {Registrar} = require('basic_mern_app')

// Register User
router.post('/', async (req, res, next) => {

    const user = req.body.newUser

    req.result = await Registrar.Register(user)

    next()

})

module.exports = router