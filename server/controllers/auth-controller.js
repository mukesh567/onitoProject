const User = require("../models/user-model");

//Registration page
const register = async (req, resp) => {
  try {
    const userCreated = await User.create(req.body);

    resp.status(201).json({
      message: `User created successFully!  `,
    });
  } catch (error) {
    resp.status(500).json("Internal server error!");
  }
};

//Get user data
const users = async (req, res, next) => {
  try {
    const users = await User.find({});

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Users not found!" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { register, users };
