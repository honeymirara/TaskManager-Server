const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const {createUser} = require('../service/api.service');
const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

module.exports = route;
