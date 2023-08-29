const generateToken = require("../helper/jwt");
const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");

const userController = {
  list: (req, res) => {
    userModel.selectAll()
      .then((result) => {
        res.json({message: result});
      })
      .catch((err) => {
        res.json({message: err.message});
      });
  },

  insert: async (req, res) => {
    try {
      const {id, username, password, level} = req.body;
      const image = req.file.filename;
      console.log(image);
      bcrypt.hash(password, 10, function (err, hash) {
        // Store hash in your password DB 
        if (err) {
          res.json({message: "error hash password"});
        } else {
          const data = {
            id, 
            username,
            password: hash,
            level,
            image
          };

          // console.log(data);
          userModel.insert(data)
            .then((result) => {
              res.json({
                Data: result,
                message: "Insert data berhasil"
              });
            })
            .catch((err) => {
              res.json({ message: err.message});
            });
        }
      });  
    }
    catch (err) {
      console.log(err.message);
    }
    
  },

  update: (req, res) => {
    const {id, username, password } = req.body;
    userModel.update(id, username, password)
      .then((result) => {
        res.json({
          Data: result, 
          message : "Data berhasil di ubah"
        });
      })
      .catch((err) => {
        res.json({ message: err.message});
      });
  },

  destroy : (req,res) => {
    const {id} = req.params;
    userModel.delete(id)
      .then((result) => {
        res.json({
          Data: result, 
          message : "Data berhasil di hapus"
        });
      })
      .catch((err) => {
        res.json({ message: err.message});
      });
  },

  login: (req, res) => {
    const { username, password } = req.body;
    userModel.loginUser(username)
      .then((data) => {

        // console.log(data);
        const userPassword = data.rows[0].password;
        const userLevel = data.rows[0].level;
        if (data.rowCount > 0) {
          bcrypt.compare(password, userPassword)
            .then(async (result) => {
              console.log(result);
              if (result) {             
                const token = await generateToken({
                  userLevel
                });
                res.json({            
                  message: "LOGIN BERHASIL",
                  generateToken: token
                });                
              } else {
                res.json({
                  message: "LOGIN GAGAL"
                });
              }
            });
        } else {
          res.json({
            message: "Data tidak ada"
          });
        }      
      });
  }
};

module.exports = userController;