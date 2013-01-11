/**
 * Module dependencies.
 */

var express = require('express'),
    app = express();
console.log(__dirname);
//Configuration
app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/app/'));
});

app.configure('development', function () {
    app.use(express.errorHandler({
        dumpExceptions:true,
        showStack:true
    }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});


app.get('/', function (req, res) {
    console.log("SENDING:", __dirname + "/app/" + "index.html");
    res.sendfile(__dirname + '/app/'+'index.html');
});

app.get('/projects/:id', function (req, res) {
    res.sendfile('index.html');
});

app.get('/aboutme', function (req, res) {
    res.sendfile('index.html');
});

app.get('/blarghh', function (req, res) {
    res.sendfile('index.html');
});

app.get('/contactme', function (req, res) {
    res.sendfile('index.html');
});

app.listen(8085);
