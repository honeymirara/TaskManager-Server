const express = require('express');
const { getAllTask, createTask, getTaskById, updateTask, patchTask, deleteTask } = require('../service/task.service');
const {isValidId, isValidTaskBody} = require('../helper/validation');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllTask();
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.get('/:id', isValidId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getTaskById(id);
        res.send(data);

    } catch (err) {
        res.send(err.message);
    }
});

route.post('/', isValidTaskBody, async (req, res) => {
    try {
        const { task, user_id } = req.body;
        const data = await createTask(task, user_id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    };

});

route.put('/:id', isValidId, isValidTaskBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { task, user_id } = req.body;
        const data = await updateTask(task, user_id, id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.patch('/:id', isValidId,  async (req, res) => {
    try {
        const { id } = req.params;
        const clientData = req.body;
        const data = await patchTask(clientData, id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.delete('/:id', isValidId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteTask(id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});




module.exports = route;