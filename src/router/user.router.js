const express = require("express");
const router = express.Router();
const {list, destroy, insert, update, login, getByID} = require("../controller/user.controller");
const {isAdmin, isCostumer} = require("../middleware/auth");
const auth = require("../middleware/staticAuth");
const upload = require("../middleware/upload");
const hitById = require("../middleware/hitByRedis");


router
   // select all data
  .get("/getFromRedis/:id", hitById, getByID)
  .get("/users", list)
  .get("/user", auth, isAdmin, list)
  
  // tambah data
  .post("/tambah-user",upload, insert)
  .post("/ubah-user", update)
  .post("/login-user", login)
  .delete("/hapus-user/:id", destroy);

module.exports = router;