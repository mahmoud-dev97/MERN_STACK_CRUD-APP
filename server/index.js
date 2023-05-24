const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const smartPhoneRoute = require("./routes/smartPhonesRoute");
const app = express();
const dbURI =
  "mongodb+srv://wezaa:wzz@cluster0.5nc1cdd.mongodb.net/crud?retryWrites=true&w=majority";
app.use(cors());
app.use(express.json());

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.use(smartPhoneRoute);

app.listen(3001, () => {
  console.log("server startedon port 3001");
});
