const connection = require('./connection');

function toQuestionMarks(num) {
    const arr = [];

    for (let i = 1; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

module.exports = {
    getAll(table, cb) {
        connection.query(`SELECT * FROM ??`, [table], (err, result) => {
            if (err) throw err;

            cb(result);
        });
    },
    create(table, cols, vals, cb) {
        connection.query(`INSERT INTO ?? (${cols.toString()}) VALUES(${toQuestionMarks(vals.length)})`, [table, vals], (err, result) => {
            if (err) throw err;

            cb(result);
        })
    },
};