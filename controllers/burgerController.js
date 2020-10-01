const Burger = require('../models/burger.js');
const express = require('express');

const router = express.Router();

router.get("/index", function (req, res) {
    Burger.all(data => {
        const burgersObj = { burgers: data };

        res.render('index', burgersObj);
    })
});

module.exports = router;

