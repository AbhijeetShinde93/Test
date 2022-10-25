const mongoose = require("mongoose");

const PhonebookShema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  contact: {
    type: "number",
    required: true,
  },
});

const Phonebook = mongoose.model("Phonebook", PhonebookShema);

module.exports = Phonebook;
