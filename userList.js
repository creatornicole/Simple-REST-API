//To add CRUD-Operations (database operations)

var mysql = require('mysql');

//create database connection
var mysqlCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "verteilte_sys_pr02"
});

mysqlCon.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

exports.list_all_users = function(req, res) {
    
}

exports.create_user = function(req,res) {

}

exports.delete_user = function(req,res) {

}

exports.show_user = function(req,res) {

}

exports.update_user = function(req,res) {

}

