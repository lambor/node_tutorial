/**
 * Module dependencies.
 */

const express = require('express');
const routes = require('./routes');
const http = require('http');
const path = require('path');
const engine = require('ejs-locals');
const MongoStore = require('connect-mongo')(express);
const settings = require('./settings');

const app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs',engine);
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.routes);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());
app.use(express.session({
    secret: settings.cookieSecret,
    store: new MongoStore({url: settings.db_url})
}));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.use(function(req,res,next){
    res.locals['user'] = req.session['user'];

    var error = req.session['error'];
    if(error && error.length) res.locals['error'] = error;
    else res.locals['error'] = null;
    req.session['error'] = null;

    var success = req.session['success'];
    if(success && success.length) res.locals['success'] = success;
    else res.locals['success'] = null;
    req.session['success'] = null;

    next();
});

app.use(function(req,res,next){
    res.locals['page'] = req.path.replace(/\//g, '_');
    next();
});

app.get('/', routes.index);
app.get('/u/:user',routes.user);
app.post('/post',routes.post);
app.get('/reg',routes.reg);
app.post('/reg',routes.doReg);
app.get('/login',routes.login);
app.post('/login',routes.doLogin);
app.get('/logout',routes.logout);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
