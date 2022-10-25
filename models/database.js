const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306, 
    database: 'zetsu-db', 
    user: 'root', 
    password: ''   
})


module.exports = {
  connection
}