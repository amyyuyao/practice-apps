require("dotenv").config();
const express = require("express");
const path = require("path");
const { save, getAll, deleteWord } = require("./db.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
// app.use(express.urlencoded({extended: true}));


app.post('/glossary', function (req, res) {
  save(req.body)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log(err);
  });
});

app.get('/glossary', function(req, res) {
  getAll()
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    console.log(err);
  });
});

app.post('/words', function (req, res) {
  deleteWord(req.body)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log("POST failed!");
  });
});

app.get('/words', function(req, res) {
  getAll(req.body)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    console.log("GET failed!");
  });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
