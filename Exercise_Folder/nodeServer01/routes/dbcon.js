var express = require('express');
var router = express.Router();
//#8
const mysql = require('mysql');

const con = mysql.createConnection(
    {host: "localhost", port: "3306", database: "testnode", user: "root", password: '1234'}
);

module.exports = { con };