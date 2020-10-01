const Burger = require('../models/burger.js');
const express = require('express');

const router = express.Router();

router.get("/index", function (req, res) {
    console.log('hit')
    Burger.all(data => {
        const burgersObj = { burgers: data };

        console.log(burgersObj);
        res.render('index', burgersObj);
    })
});

module.exports = router;

