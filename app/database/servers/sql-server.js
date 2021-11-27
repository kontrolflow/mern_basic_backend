require('dotenv').config()
const mysql = require('mysql')

// Set Connection Settings
const db = mysql.createConnection({
    host    : process.env.DB1_HOST,
    user    : process.env.DB1_USER,
    password: process.env.DB1_PASS,
    database: process.env.DB1_NAME
});

// Test Connection
db.connect((err) => {
    if(err){ throw err }
    // console.log('MySQL Connected...')
})

//Export Connection
module.exports = db;