const { createUserDB, getUserByEmailDB } = require('../repository/api.repository');

async function createUser(name, surname, email, pwd) {
    const foundUser = await getUserByEmailDB(email);
  if (foundUser.length) throw new Error('user already exists');
    const data = await createUserDB(name, surname, email, pwd);
    return data;
};



module.exports = { createUser };