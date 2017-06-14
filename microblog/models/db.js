/**
 * Created by lambor on 17-6-14.
 */
var settings = require('../settings');
var Db = require('mongodb').Db;
// var Connection = require('mongodb').CoreConnection;
var Server = require('mongodb').Server;

var port = process.env['MONGO_NODE_DRIVER_PORT']||'27017';
module.exports = new Db(settings.db,new Server(settings.host,port));