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
app.listen()

module.exports = app