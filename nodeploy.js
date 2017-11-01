const path = require('path');

var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

const compress = require('compression');
const request = require('request');
var http = require('http');
var fs = require('fs');
const morgan = require('morgan')

var bodyParser = require('body-parser');

var io = require('socket.io')(http);

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(compress());
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

//Define Routing
var api = require('./routes/api');

//Use Routing
app.use('/api', api);

app.get('/', function (req, res, next) {
    console.log('get route', req.testing);
    res.end();
});

app.ws('/', function (ws, req) {
    ws
        .on('message', function (msg) {
            console.log(msg);
            ws.send(`Hi! ${new Date()}`)
        });
    console.log('Socket Connected');
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, function () {
    console.log('Server running on port ' + PORT);
});