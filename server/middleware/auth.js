const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      res.status(401);
      return;
    }
    const decodedToken = await jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          return false;
        }
        return decoded;
      }
    );
    if (!decodedToken) {
      res.status(401);
      return;
    }
    const db = req.app.get("db");
    req.user = await db.user.findUnique({
      where: {
        id: decodedToken.uid,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        profilePicture: true,
      },
    });
  } catch (error) {
    res.status(401);
    return;
  }
  next();
};

module.exports = {
  verifyToken,
};
