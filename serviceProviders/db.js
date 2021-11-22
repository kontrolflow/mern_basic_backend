const mysql = require('mysql')

// Create Connection
const db = mysql.createConnection({
    host    : process.env.DB_HOST,
    user    : process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'mern_crud'
});

// Connect
db.connect((err) => {
    if(err){ throw err }
    console.log('MySQL Connected...')
})

//Export Connection
module.exports = db;