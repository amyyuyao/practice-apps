require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post('/glossary' (req, res) => {
  console.log(req.body);

})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
