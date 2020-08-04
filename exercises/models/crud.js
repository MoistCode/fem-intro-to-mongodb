const User = require('./user')

const getUserById = (id) => {
  return User.findById(id);
}

const getAllUsers = () => {
  return User.find({});
}

const createUser = (userDetails) => {
  return User.create(userDetails);
}
const removeUserById = (id) => {
  return User.findByIdAndRemove(id);
}

const updateUserById = (id, update) => {
  return User.findByIdAndUpdate(id, update, { new: true });
}

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  removeUserById,
  updateUserById
}
