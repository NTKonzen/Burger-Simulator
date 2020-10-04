const mysql = require('mysql')
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'burgersDB'
    });
}

connection.connect((err, res) => {
    if (err) throw err;
    console.log(`Connection made at id ${connection.threadId}`)
});

module.exports = connection;
