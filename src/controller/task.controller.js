const express = require('express');
const { getAllTask, createTask, getTaskById, updateTask, patchTask, deleteTask } = require('../service/task.service');
const { isValidId, isValidTaskBody } = require('../helper/validation');
const { buildResponse } = require('../helper/buildResponse');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllTask();
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.get('/:id', isValidId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getTaskById(id);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.post('/', isValidTaskBody, async (req, res) => {
    try {
        const { task, user_id } = req.body;
        const data = await createTask(task, user_id);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    };

});

route.put('/:id', isValidId, isValidTaskBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { task, user_id } = req.body;
        const data = await updateTask(task, user_id, id);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.patch('/:id', isValidId, async (req, res) => {
    try {
        const { id } = req.params;
        const clientData = req.body;
        const data = await patchTask(clientData, id);
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

route.delete('/:id', isValidId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteTask(id);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});




module.exports = route;