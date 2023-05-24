const mongoose = require("mongoose");

const SmartPhoneSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  origin: { type: String, required: true },
});

const SmartPhone = mongoose.model("smartphones", SmartPhoneSchema);

module.exports = SmartPhone;
