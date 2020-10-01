const orm = require('../config/orm');

const Burger = {
    all(cb) {
        orm.getAll('burgers', 'burgersDB', cb);
    }
};

module.exports = Burger;