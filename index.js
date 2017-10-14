const express = require('express')
const app = express()

const skyscanner = require('./helpers/skyscanner')

app.get('/', function (req, res) {
    res.send('Hello World!')
})

//
// Skyscanner routes
//
app.get('/flight/:destination/:dateStart', function(req, res) {
    const params = req.params
    res.send(skyscanner.getFlightSuggestion([params.dateStart], params.destination))
})
app.get('/flight/:destination/:dateStart/:dateEnd', function (req, res) {
    const params = req.params
    res.send(skyscanner.getFlightSuggestion([params.dateStart, params.dateEnd], params.destination))
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
