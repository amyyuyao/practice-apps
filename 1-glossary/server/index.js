require("dotenv").config();
const express = require("express");
const path = require("path");
const { save, getAll } = require("./db.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post('/glossary', function (req, res) {
  console.log("success!!!!!!!!!!!!!!!!!");
  save(res)
  .then(() => {
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log("POST failed!");
  })
});

app.get('/glossary', function(req, res) {
  console.log("SUCCESS");
  getAll()
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    console.log("GET failed!");
  })
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
