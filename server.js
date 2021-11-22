////////////    API Routing Imports    ////////////
const express = require('express')
const app = express()
app.use(express.json())

////////////    Add Headers    ////////////
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next();
})


/////////    Service Provider Imports    /////////
require('dotenv').config()


////////////    API Routes    ////////////

///////  Root Route  ///////
app.get('/', (req, res) => {
  res.send('Hello from MERN Application!');
});


///////    Initialize API    ///////

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});