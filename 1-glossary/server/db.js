const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary');
// const axios from 'axios';

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

let glossarySchema = mongoose.Schema({
  word: { type: String, unique: true, required: true },
  definition: { type: String, required: true }
})

let Glossary = mongoose.model('Glossary', glossarySchema);

var save = function (data) {
  return Glossary.updateOne(
    {},
    {
      word: data.word,
      definition: data.definition
    },
    { upsert: true });
}

var getAll = function () {
  return Glossary.find({})
    .sort({ id: -1 })
    .limit(10)
    .exec();
}

module.exports = {
  save,
  getAll,
};