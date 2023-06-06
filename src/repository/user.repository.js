const pool = require('../db');

async function getAllUsersDB() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users';
    const result = (await client.query(sql)).rows;
    return result;
};

async function getUserByIdDB(id) {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users  WHERE id = $1 '
    const result = (await client.query(sql, [id])).rows;
    return result;
};

async function createUserDB(name, surname, email, pwd) {
    const client = await pool.connect()
    const sql = 'INSERT INTO users(name, surname, email, pwd) VALUES ($1, $2, $3, $4) returning *';
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result;
};

async function updateUserDB(name, surname, email, pwd, id) {
    const client = await pool.connect();
    const sql = 'UPDATE users SET name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 RETURNING *';
    const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
    return result;

};

async function patchUserDB(clientData, id) {
    const client = await pool.connect();
    const sql = 'SELECT *FROM users WHERE id = $1';
    const result = (await client.query(sql, [id])).rows;

    const merge = { ...result[0], ...clientData };
    const sql2 = 'UPDATE users SET name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 RETURNING*';
    const patchData = (await client.query(sql2, [merge.name, merge.surname, merge.email, merge.pwd, merge.id])).rows;
    return patchData;
};

async function deleteUserDB(id) {
    const client = await pool.connect();
    const sql = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const result = (await client.query(sql, [id])).rows;
    return result;
};



module.exports = { getAllUsersDB, createUserDB, getUserByIdDB, updateUserDB, patchUserDB, deleteUserDB };