var express = require("express");
var router = express.Router();
const userController = require("../controllers/user");
const { check } = require("express-validator");
const bcrypt = require("bcrypt");
const authMiddleware = require("../middleware/auth");

router.get("/getUser", authMiddleware.verifyToken, userController.getUserData);

router.post(
  "/login",
  [
    check("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email format is invalid")
      .custom(async (value, { req }) => {
        const db = req.app.get("db");
        const user = await db.User.findUnique({
          where: {
            email: value,
          },
        });
        if (user === null) {
          throw new Error("Can't find a user with that email");
        }
        return true;
      }),
    check("password")
      .notEmpty()
      .withMessage("Password is required")
      .custom(async (value, { req }) => {
        const db = req.app.get("db");
        const user = await db.user.findUnique({
          where: {
            email: req.body.email,
          },
        });
        if (user !== null) {
          if (!bcrypt.compareSync(value, user.password)) {
            throw new Error("Incorrect password");
          }
        }
        return true;
      }),
  ],
  userController.login
);

router.post(
  "/signup",
  [
    check("firstName")
      .notEmpty()
      .withMessage("First name is required")
      .isLength({ min: 3, max: 18 })
      .withMessage("First name should be between 3 - 18 characters")
      .isAlpha("en-GB")
      .withMessage("First name should contain letters only"),
    check("lastName")
      .notEmpty()
      .withMessage("Last name is required")
      .isLength({ min: 3, max: 18 })
      .withMessage("Last name should be between 3 - 18 characters")
      .isAlpha("en-GB")
      .withMessage("Last name should contain letters only"),
    check("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email format is invalid")
      .custom(async (value, { req }) => {
        const db = req.app.get("db");
        const user = await db.User.findUnique({
          where: {
            email: value,
          },
        });
        if (user !== null) {
          throw new Error("Email is already used");
        }
        return true;
      }),
    check("password")
      .notEmpty()
      .withMessage("Password is required")
      .isStrongPassword({ minSymbols: 0, minUppercase: 0, minNumbers: 0 })
      .withMessage("Password should be at least 8 characters long")
      .isLength({ max: 128 })
      .withMessage("Password should be maximum 128 characters long"),
  ],
  userController.signUp
);

module.exports = router;
