const client = require("../config/redis");

const hitByID = async(req, res, next) => {
  const idUser = req.params.id;
  console.log("iduser: "+idUser)
  try {
    const user = await client.get(`getFromRedis/${idUser}`);
    console.log(user);
    if (user) {
      let result = JSON.parse(user);
      res.send({
        fromCache: true,
        data: result
      });
    } else {
      next();
    }
  } catch (err) {
    console.log(err.message);
    res.status(404);
  }
};

module.exports = hitByID;