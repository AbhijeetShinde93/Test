const phonebook = require("../Model/Phonebook");

const addContact = async (req, res) => {
  try {
    const { name, contact } = req.body;
    console.log(res.body);

    const contacts = new phonebook(req.body);
    await contacts.save();
    return res.status(201).json({
      status: "Success",
      data: {
        contacts,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
};

module.exports = {
  addContact,
};
