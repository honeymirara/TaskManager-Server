const { createUserDB, getUserByEmailDB } = require('../repository/api.repository');

const bcrypt = require('bcrypt');
const salt = 2

async function createUser(name, surname, email, pwd) {
    const foundUser = await getUserByEmailDB(email);
    if (foundUser.length) throw new Error('user already exists');

    const hashedPassword = await bcrypt.hash(pwd, salt)
    const data = await createUserDB(name, surname, email, hashedPassword);
    return data;
};

async function authorizationUser(email, pwd) {
    const foundUser = await getUserByEmailDB(email);
    if (!foundUser.length) throw new Error('user not found');

    const bool = await bcrypt.compare(pwd, foundUser[0].pwd);
    if (!bool) throw new Error('password is wrong');
    return foundUser;
};



module.exports = { createUser , authorizationUser};