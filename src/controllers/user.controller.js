// get data from the database and send it to the users

const User = require("../model/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Users fetched successfully",
      data: [...users],
    });
  } catch (err) {
    console.log("Error =========", err);
    res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

const createUser = async (req, res) => {
  // assumption
  // email and name are a part of the body
  try {
    const { email, name } = req.body;
    let newUser = new User({ name, email });
    await newUser.save();
    res.status(200).json({
      message: "User created successfully",
      data: { ...newUser._doc },
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
