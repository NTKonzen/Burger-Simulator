const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'rmtmoa951zo9txob',
    password: 's6bd7yrgdsyjp45n',
    database: 'yxnzwsrld2i4h7z3'
});

connection.connect((err, res) => {
    if (err) throw err;
    console.log(`Connection made at id ${connection.threadId}`)
});

module.exports = connection;
