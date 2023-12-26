const Users = require("../models/users.model");

exports.getUser = async (req, res) => {
  try {
    const id = req.id;
    let user = await Users.findById(id);

    if (user) {
      user = user.toObject();
      delete user["hashedPassword"];

      return res.status(200).send({ success: true, user: user });
    }
    return res
      .status(400)
      .send({ success: false, message: "User doesnt exist." });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let response = await Users.deleteOne({ _id: req.params.userId });

    if (response) {
      return res.status(200).send({ message: "User has been deleted." });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};