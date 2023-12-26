const Users = require("../models/users.model");

exports.isAdmin = async (req, res, next) => {
  const { id } = req;

  const user = await Users.findOne({ _id: id });

  if (user.role !== 0) {
    return res.status(401).send({ message: "Admin resource. Access denied!" });
  }

  next();
};
