const orm = require('../config/orm');

const Burger = {
    all(cb) {
        orm.getAll('burgers', cb);
    },
    create(vals, cb) {
        orm.create('burgers', ['name', 'devoured'], vals, cb);
    },
    devour(id, cb) {
        orm.update('burgers', 'devoured=true', id, cb);
    },
    delete(id, cb) {
        orm.delete('burgers', id, cb);
    }
};

module.exports = Burger;