const pool = require('../db');

async function getAllTaskDB() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM tasks'
    const result = (await client.query(sql)).rows;
    return result;
};

async function getTaskByIdDB(id) {
    const client = await pool.connect();
    const sql = 'SELECT * FROM tasks WHERE id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
};

async function createTaskDB(task, user_id) {
    const client = await pool.connect();
    const sql = 'INSERT INTO tasks(task, user_id) VALUES ($1, $2) RETURNING*';
    const result = (await client.query(sql, [task, user_id])).rows;
    return result;
};

async function updateTaskDB(task, user_id, id) {
    const client = await pool.connect();
    const sql = 'UPDATE tasks SET task = $1, user_id = $2 WHERE id = $3 RETURNING*';
    const result = (await client.query(sql, [task, user_id, id])).rows;
    return result;

};

async function patchTaskDB(clientData, id) {
    const client = await pool.connect();
const sql = 'SELECT * FROM tasks WHERE id = $1';
const result = (await client.query(sql, [id])).rows;

const merge = {...result[0], ...clientData };
const sql2 = 'UPDATE tasks SET task = $1, user_id = $2 WHERE id = $3 RETURNING*'
const patchData= (await client.query(sql2, [merge.task, merge.user_id, merge.id])).rows;
return patchData;
   
};

async function deleteTaskDB(clientData, id) {
    const client = await pool.connect();
    const sql = 'DELETE FROM tasks WHERE id = $1 RETURNING*';
    const result = (await client.query(sql, [id])).rows;
    return result;
};


module.exports = { getAllTaskDB, createTaskDB, getTaskByIdDB, updateTaskDB, patchTaskDB, deleteTaskDB };