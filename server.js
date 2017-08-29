var express = require('express')
var app = express()

app.set('port', process.env.PORT || 3000)

app.get('/events', function(request, response) {

})

app.post('/event', function(request, response) {

})
app.listen(app.get('port'), function() {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})

module.exports = app