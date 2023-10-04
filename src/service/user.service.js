const { getAllUserDb, createUserDb, updateUserDb, getUserByEmaillDb } = require("../repository/user.repository");
const bcrypt = require('bcrypt')
async function getAllUser() {
  const data = await getAllUserDb();
  return data;
}

async function createUser(name, surname, email, password) {
const user = await getUserByEmaillDb(email)
if (user.length) throw new Error('такой пользователь есть')
const hashPassword = await 
    const data = await createUserDb(name, surname, email, password);
  return data;
}

async function updateUser(id, name, surname, email, password){
    const data = await updateUserDb(id, name, surname, email, password)
    return data
}


module.exports = { getAllUser, createUser, updateUser };
