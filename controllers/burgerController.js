const Burger = require('../models/burger.js');
const express = require('express');

const router = express.Router();

router.get("/", function (req, res) {
    Burger.all(data => {
        const burgersObj = { burgers: data };

        res.render('index', burgersObj);
    })
});

router.post('/api/burgers', (req, res) => {
    Burger.create([req.body.name, false], (result) => {
        res.json({ id: result.insertId });
    })
})

module.exports = router;

