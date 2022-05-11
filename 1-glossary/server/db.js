const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:3000/glossary');

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

let glossarySchema = mongoose.Schema({
  id: { type: Number, unique: true },
  word: String,
  definition: String
})

let Glossary = mongoose.model('Glossary', glossarySchema);

