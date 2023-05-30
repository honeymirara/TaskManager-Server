const pool = require('../db');

async function getAllTaskDB(){
const client = await pool.connect();
const sql = 'SELECT * FROM tasks'
const result = (await client.query(sql)).rows;
return result;
};

async function getTaskByIdDB(id){
    const client = await pool.connect(id);
    const sql = 'SELECT * FROM tasks WHERE id = $2 RETURNING*';
    const result = (await client.query(sql, [id])).rows
    return result;
};

async function createTaskDB(task, user_id){
    const client = await pool.connect();
    const sql = 'INSERT INTO tasks(task, user_id) VALUES ($1, $2) RETURNING*';
    const result = (await client.query(sql, [task, user_id])).rows;
    return result;
};


module.exports = {getAllTaskDB, createTaskDB, getTaskByIdDB};