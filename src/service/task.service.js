const { getAllTaskDB, getTaskByIdDB, createTaskDB, updateTaskDB, updateDB, deleteTaskDB } = require('../repository/task.repository');

async function getAllTask() {
    const data = await getAllTaskDB()
    return data;
};

async function getTaskById(id) {
    const data = await getTaskByIdDB(id);
    return data;
};

async function createTask(task, user_id) {
    const data = await createTaskDB(task, user_id);
    return data;
};

async function updateTask(task, user_id, id) {
    const data = await updateTaskDB(task, user_id, id);
    return data;
};

async function update(task, user_id, id) {
    const data = await updateDB(task, user_id, id);
    return data;
};

async function deleteTask(id){
    const data = await deleteTaskDB(id);
    return data;
};

module.exports = { getAllTask, getTaskById, createTask, updateTask, update, deleteTask };