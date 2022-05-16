require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const { save, getAll } = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());

app.post("/checkout", (req, res) => {
  console.log("This is the request.body looks like: ", req.body);
  save(req.body)
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    console.log("Error post checkout infos: ", err);
    res.status(500).send(err);
  });
});

app.get("/checkout", (req, res) => {
  // console.log(res.data);
  getAll()
  .then((data) => {
    // console.log(data[0][0]);
    res.status(200).send(data[0][0]);
  })
  .catch((err) => {
    console.log("Error get all checkout infos: ", err);
    res.sendStatus(500);
  });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
