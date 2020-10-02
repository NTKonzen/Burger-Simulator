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
    update(table, newVal, id, cb) {
        id = parseInt(id)
        connection.query(`UPDATE ?? SET ${newVal} WHERE id=?`, [table, id], (err, result) => {
            if (err) throw err;

            cb(result);
        })
    },
    delete(table, id, cb) {
        connection.query(`DELETE FROM ?? WHERE id=?`, [table, id], (err, result) => {
            if (err) throw err;

            cb(result);
        })
    }
};