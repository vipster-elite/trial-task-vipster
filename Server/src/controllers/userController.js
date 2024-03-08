// userController.js
const prisma = require('../config/database');

const registerUser = async (req, res) => {
  const { email, password, address } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        address,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log("error :" + error)
    res.status(500).json({ error: 'Failed to register user' });
  }
};

module.exports = { registerUser };
