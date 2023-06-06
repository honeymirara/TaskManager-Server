const express = require('express');
const { getAllUser, createUser, getUserById, updateUser, deleteUser} = require('../service/user.service');
const {isValidId, isValidUserBody} = require('../helper/validation');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        res.send(data)
    } catch (err) {
        res.send(err.message);
    }
});

route.get('/:id', isValidId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
})

route.post('/', isValidUserBody, async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.put('/:id', isValidId, isValidUserBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = await updateUser(name, surname, email, pwd, id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.delete('/:id', isValidId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});



module.exports = route;

