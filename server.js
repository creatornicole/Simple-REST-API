var express  = require('express');
var path     = require('path');
var app = express();



app.listen(3000);

app.route('/')
  .get(function(req, res){
    res.sendFile(path.join(__dirname, './','index.html'));
  })

app.route('/user').get(function(req, res){

})

app.route('/user').post(function(req,res){

})

app.route('/user/:userId').delete(function(req,res){

})

app.route('/user/:userId').get(function(req,res){

})

app.route('/user/:userId').put(function(req,res){
    
})