const {getAllUsersDB, createUserDB, getUserByIdDB, updateUserDB, patchUserDB, deleteUserDB} = require('../repository/user.repository');

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
};

async function updateUser(name, surname, email, pwd, id){
    const data = await updateUserDB(name, surname, email, pwd, id);
    return data;
};

async function patchUser(clientData, id){
    const data = await patchUserDB(clientData, id);
    return data;
};

async function deleteUser(id){
    const data = await deleteUserDB(id);
    return data;
};



module.exports = {getAllUser, createUser, getUserById, updateUser, patchUser, deleteUser};