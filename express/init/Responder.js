function Responder(app) {

    ///////   Responder   ///////
    app.use(function (req, res) {
        // Route Not Found (No Result Found)
        if(req.result == undefined) {
            res.status(404).send()
        } else {

            // Status Code Only Response
            if(req.result.json == undefined) {
            res.status(req.result.status).send()
            } 

            // JSON Only Response
            else if(req.result.status == undefined) {
            res.json(req.result.json)
            }

            // Status Code + JSON Response
            else {
            res.status(req.result.status).json(req.result.json)
            }
        }
    })
  
}

module.exports = Responder
