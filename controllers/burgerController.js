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
});

router.put('/api/burgers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    Burger.devour(id, (result) => {
        res.sendStatus(200);
    })
});

router.delete('/api/burgers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    Burger.delete(id, (result) => {
        res.sendStatus(200);
    });
})

module.exports = router;

