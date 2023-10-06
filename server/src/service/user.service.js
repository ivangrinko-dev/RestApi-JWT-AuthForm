const {
  getAllUserDb,
  createUserDb,
  updateUserDb,
  getUserByEmaill,
  deleteUserDb,
  getUserByEmailDb,
} = require("../repository/user.repository");

const bcrypt = require("bcrypt");
async function getAllUser() {
  const data = await getAllUserDb();
  return data;
}

async function createUser(name, surname, email, password) {
  const user = await getUserByEmaill(email);
  if (user.length) throw new Error("такой пользователь есть");
  const soltround = 3;
  const hashPassword = await bcrypt.hash(password, soltround);
  const data = await createUserDb(name, surname, email, hashPassword);
  return data;
}

async function updateUser(id, name, surname, email, password) {
  const data = await updateUserDb(id, name, surname, email, password);
  return data;
}

async function deleteUser(id) {
  const data = await deleteUserDb(id);
  return data;
}

async function authorizationUser(email, password) {
  const foundUser = await getUserByEmailDb(email);
  if (!foundUser.length) throw new Error("Такого пользователя нет");
const bool = await bcrypt.compare(password, foundUser[0].password);
  if (!bool) throw new Error("Пароли не совпадают");
  return foundUser;
}

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  authorizationUser,
};
