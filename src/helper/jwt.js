require("dotenv").config();
const jwt = require("jsonwebtoken");
const tokenData = process.env.SECRET_KEY;

// const tokenData = "pijarcamp";

const generateToken = async (payload) => {
  const token = await jwt.sign(payload, tokenData, {
    expiresIn: "1h"
  });
  // console.log(token);
  return token;
};

module.exports = generateToken;