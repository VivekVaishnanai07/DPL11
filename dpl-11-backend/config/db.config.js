const mysql = require('mysql2')

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Vivek@0033",
database:"dpl_11" 
})

module.exports = db;
