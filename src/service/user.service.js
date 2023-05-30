const {getAllUsersDB, createUserDB, getUserByIdDB} = require('../repository/user.repository');

async function getAllUser(){
    const data = await getAllUsersDB()
    return data;
};

async function createUser(name, surname, email, pwd){
    const data = await createUserDB(name, surname, email, pwd)
    return data;
};

async function getUserById(id){
    const data = await getUserByIdDB(id);
    return data;
}



module.exports = {getAllUser, createUser, getUserById};