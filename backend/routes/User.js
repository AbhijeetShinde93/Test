const express = require("express");
const { addContact } = require("../Controllers/phonebook");

const router = express.Router();

router.post("/phonebook", addContact);

module.exports = router;
