function Routes(app) {

    ///////  Root Route  ///////
    app.get('/', (req, res) => {
        res.send('App Rooting');
    });
  
    ///////  Routes with Routes  ///////
    const registrarRoutes = require('../routes/registrar/registrar')
    app.use('/registrar', registrarRoutes)

    const loginRoutes = require('../routes/login/login')
    app.use('/login', loginRoutes)

    const securedRoutes = require('../routes/secured/secured')
    app.use('/secured', securedRoutes)
  
}

module.exports = Routes