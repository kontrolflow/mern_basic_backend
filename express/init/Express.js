const express = require('express')

function Express() {
    const app = express()
    app.use(express.json())
    return app
}

module.exports = Express