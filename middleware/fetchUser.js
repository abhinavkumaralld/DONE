const jwt = require("jsonwebtoken");
const jsonwebtokensecret = "mysecret@3";
const user = require("../models/Userschema");
const fetchfun = (req, res, next) => {
  const tocken = req.header("auth-tocken");
  console.log("ky abe");
  if (!tocken) {
    return {};
    res.status(401).send({ error: "kindly authenticate tocken" });
  }

  try {
    // console.log("ur tkn", tocken);
    const detail = jwt.verify(tocken, jsonwebtokensecret);

    req.user = detail;
    // console.log(req.user.id);
    next();
  } catch (error) {
    res.status(401).send({ error: "kindly authenticate tocken tocken again" });
  }
};
module.exports = fetchfun;
