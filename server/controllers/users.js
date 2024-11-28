const users = require("../db/entities/users");
const { getIO } = require("../socket");

const getUsers = async (req, res) => {
  try {
    const usersResponse = await users.getAllUsers();
    res.status(200).json(usersResponse);
    /*
    getIO().emit("event1", "message or object"); // if you want emmit an event from endpoint controller
    */
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUsers = async (req, res) => {
  try {
    const { name, email } = req.body;
    const userCreated = await users.createUser({ name, email });
    res.status(200).json(userCreated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await users.getUserById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const { id } = req.params;

    const userCreated = await users.updateUser(id, { name, email });
    res.status(200).json(userCreated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userCreated = await users.deleteUser(id);
    res.status(200).json(userCreated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getUsers,
  createUsers,
  getUser,
  updateUser,
  deleteUser,
};