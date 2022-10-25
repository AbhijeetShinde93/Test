const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(cors());
const PORT = 8080;

app.use("/user", require("./routes/User.js"));

app.get("/", (req, res) => {
  res.send("hello");
});

const DB =
  "mongodb+srv://abhi1234:abhi1234@cluster0.wymmwnt.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected..");
  });

app.listen(PORT, () => {
  console.log(`server is connected on port ${PORT}`);
});
