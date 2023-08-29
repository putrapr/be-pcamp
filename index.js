const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const userRouter = require("./src/router/user.router");

const port = 3000;
app.use(bodyParser.json());
app.use(userRouter);



// app.get("/", (req, res) => {
//   res.send("Ini belajar ExpressJS")
// })

// app.post("/latihan-body", (req, res) => {
//   const body = req.body

//   res.json({
//     body,
//     success: "Data terkirim"
//   })
// })

// app.get("urlparams/:id", (req, res) => {
//   const urlParams = req.params.id;
//   res.json({
//     urlParams
//   })
// })

// app.get("/queryparams", (req, res) => {
//   const queryParams = req.query;
//   res.json({
//     queryParams
//   })
// })

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});