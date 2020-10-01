const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgersDB'
});

connection.connect((err, res) => {
    if (err) throw err;
    console.log(`Connection made at id ${connection.threadId}`)
});

module.exports = connection;
