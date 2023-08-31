const db = require("../config/db");

const userModel = {
  selectAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  },

  insert: ({id, username, password, level, image}) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO users (id, username, password, level, image) VALUES (${id}, '${username}', '${password}', '${level}', '${image}')`, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  },

  update: (id, username, password) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE users SET username='${username}', password='${password}' WHERE id=${id}`, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM users WHERE id=${id}`, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  },
  
  login: (username) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE username = '${username}'`, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  },

  selectById: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE id = '${id}'`, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
  
};



module.exports = userModel;