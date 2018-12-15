var express = require('express');
var cors = require('cors')
var app = express();
var db = require('./database')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
// index page
app.get('/', function (req, res) {
    res.send('Patiphan is running');
    });

app.get('/api/products', db.getAllProducts);



    var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});