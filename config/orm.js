const connection = require('./connection');

module.exports = {
    getAll(table, db, cb) {
        connection.query(`SELECT * FROM ??.??`, [db, table], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
};