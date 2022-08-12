const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUserData = async (req, res) => {
  res.status(200).json(req.user);
};

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const db = req.app.get("db");
    const user = await db.User.findUnique({
      where: {
        email: req.body.email,
      },
    });
    const token = jwt.sign({ uid: user.id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(200).json({ token: token });
  }
};

const signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    const db = req.app.get("db");
    const user = await db.User.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 1),
      },
    });
    const token = jwt.sign({ uid: user.id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(200).json({ token: token });
  }
};

module.exports = {
  signUp,
  login,
  getUserData,
};
