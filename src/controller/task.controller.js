const express = require('express');
const { getAllTask, createTask, getTaskById, updateTask, update, deleteTask } = require('../service/task.service');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllTask();
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getTaskById(id);
        res.send(data);

    } catch (err) {
        res.send(err.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const { task, user_id } = req.body;
        const data = await createTask(task, user_id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    };

});

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { task, user_id } = req.body;
        const data = await updateTask(task, user_id, id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { task, user_id } = req.body;
        const data = await update(task, user_id, id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteTask(id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});




module.exports = route;