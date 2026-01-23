// fake database (same as before)
let users = [
  { id: "101", name: "hemanth", email: "hemanth@123gmail.com" },
  { id: "102", name: "kumar", email: "kumar@gmail.com" }
];

// GET /users
const getAllUsers = (req, res) => {
  res.json({
    message: "All users fetched",
    users
  });
};

// GET /users/:id
const getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

// PUT /users/:id
const updateUser = (req, res) => {
  const { name, email } = req.body;
  const user = users.find(u => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (name) user.name = name;
  if (email) user.email = email;

  res.json({
    message: "User updated successfully",
    user
  });
};

// DELETE /users/:id
const deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1);
  res.json({
    message: "User deleted successfully",
    user: deletedUser[0]
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
