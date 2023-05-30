const pool  = require('../db');

async function getAllUsersDB(){
    const client = await pool.connect();
    const sql = 'SELECT * FROM users';
    const result = (await client.query(sql)).rows;
    return result;
}




module.exports = {getAllUsersDB};