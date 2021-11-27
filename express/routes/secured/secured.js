// Imports for API Routing
const express = require('express');
const router = express.Router();

// Authentication Middleware
const Auth = require('../../middleware/Auth')

// Authenticate User
router.get('/', Auth.verifyToken, async (req, res, next) => {

    req.result = {
        status:200,
        json: {
            message: 'Authenticated'
        }
    }

    next()

})

module.exports = router