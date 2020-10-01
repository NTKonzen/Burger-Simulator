const orm = require('../config/orm');

const Burger = {
    all(cb) {
        orm.getAll('burgers', cb);
    }
};

module.exports = Burger;