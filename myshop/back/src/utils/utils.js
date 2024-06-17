const jwt = require("jsonwebtoken");

//ARREGLAR PARA QUE .env funcione como variables de entorno

process.env.TOKEN_SECRET =
  "aeb3ef92f07b67a687a2750a8c95e4810bbafefecd8e2952caaf6aa950dacb23";
process.env.TOKEN_SECRET_REFRESH =
  "a505622cb32cbb4954d71eeb619a956c37279730fadeeda7e1eb58b1a97acc37";

const generateToken = (payload, isRefresh) => {
  console.log("TOKEN_SECRET:", process.env.TOKEN_SECRET);
  console.log("TOKEN_SECRET_REFRESH:", process.env.TOKEN_SECRET_REFRESH);

  if (isRefresh) {
    return jwt.sign(payload, process.env.TOKEN_SECRET_REFRESH, {
      expiresIn: "5min",
    });
  }

  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1min" });
};

module.exports = { generateToken };
