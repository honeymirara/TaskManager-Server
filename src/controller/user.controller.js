const express = require('express');
const { getAllUser, createUser, getUserById, updateUser, patchUser, deleteUser } = require('../service/user.service');
const { isValidId, isValidUserBody } = require('../helper/validation');
const { buildResponse } = require('../helper/buildResponse');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.get('/:id', isValidId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})

route.post('/', isValidUserBody, async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.put('/:id', isValidId, isValidUserBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = await updateUser(name, surname, email, pwd, id);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    };
});

route.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const clientData = req.body;
        const data = await patchUser(clientData, id);
        buildResponse(res, 200,  data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    };
});

route.delete('/:id', isValidId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id);
       buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});



module.exports = route;

