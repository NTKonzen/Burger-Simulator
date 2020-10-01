const connection = require('./connection');

module.exports = {
    getAll(table, cb) {
        connection.query(`SELECT * FROM ??`, [table], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
};