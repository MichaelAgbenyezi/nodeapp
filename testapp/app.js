var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var restful = require('node-restful');
var mongoose = restful.mongoose;
var port =3000;
mongoose.connect('mongodb://magbeny@gmail.com:gator123@ds043220.mongolab.com:43220/myrestapp');

var ProductSchema = mongoose.Schema({
 "name": String,
 "category":String,
 "sku":String,
 "price":Number
});

var Products = restful.model('products', ProductSchema);
Products.methods(['get','post','put','post','delete']);
Products.register(app, 'api/products');
app.listen(port);
console.log('Listening on port: '+port);
