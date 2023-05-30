const express = require('express');
const {getAllUser} = require('../service/user.service');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        res.send(data)
    } catch (err) {
        res.send(err.message);
    }
})

module.exports = route;

