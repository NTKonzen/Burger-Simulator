const orm = require('../config/orm');

const Burger = {
    all(cb) {
        orm.getAll('burgers', cb);
    },
    create(vals, cb) {
        orm.create('burgers', ['name', 'devoured'], vals, cb);
    }
};

module.exports = Burger;