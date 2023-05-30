const express = require('express');
const { getAllUser, createUser } = require('../service/user.service');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        res.send(data)
    } catch (err) {
        res.send(err.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const {name, surname, email, pwd} = req.body;
        const data = await createUser(name, surname, email, pwd);
            res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = route;

