const express = require('express')
const app = express();



// CORS middleware
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}
app.use(allowCrossDomain)



let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));




app.listen(process.env.PORT || 3000)
console.log('server running')

require('./routes')(app)
