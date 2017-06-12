/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/hello', routes.hello);
app.all('/user/:username',function(req,res,next){
    console.log('all methods captured');
    next();
});
var users = {
    'byvoid':{
        name:'Carbo',
        website:'http://www.byvoid.com'
    }
};
app.get('/user/:username',function(req,res,next){
    if(users[req.params.username]) {
        next();
    } else {
        next(new Error(req.params.username + 'does not exist'));
    }
});
app.get('/user/:username', function (req, res) {
    res.send("name:" + req.params.username);
});


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
