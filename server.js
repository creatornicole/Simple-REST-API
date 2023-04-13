var express  = require('express');
var path     = require('path');
var app = express();

var userList = require('./userList');
var mysql = require('mysql');



app.listen(3000);

app.route('/')
  .get(function(req, res){
    res.sendFile(path.join(__dirname, './','index.html'));
  })

app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_user);

app.route('/users/:userId')
    .delete(userList.delete_user)
    .get(userList.show_user)
    .put(userList.update_user);