const {getAllUsersDB} = require('../repository/user.repository');

async function getAllUser(){
    const data = await getAllUsersDB()
    return data;
};



module.exports = {getAllUser}