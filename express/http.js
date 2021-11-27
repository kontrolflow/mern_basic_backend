////////////    Express App Creation    ////////////
const Express = require('./init/Express')
const app = Express()

////////////    Add Headers    ////////////
const Headers = require('./init/Headers')
Headers(app)

////////////    API Routes    ////////////
const Routes = require('./init/Routes')
Routes(app)

///////   Responder   ///////
const Responder = require('./init/Responder')
Responder(app)

///////    Initialize API    ///////
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

module.exports = app