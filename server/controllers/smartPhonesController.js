const SmartPhoneModel = require("../models/Smartphonesmodel");

const getAllData = async (req, res) => {
  try {
    const smartPhones = await SmartPhoneModel.find();
    res.json(smartPhones);
  } catch (err) {
    console.log(err);
  }
};

const addData = async (req, res) => {
  const companyName = req.body.companyName;
  const existingSmartPhone = await SmartPhoneModel.findOne({
    companyName: companyName,
  });

  if (existingSmartPhone) {
    return res.status(400).json("Company name already exists");
  }

  const smartphone = new SmartPhoneModel({
    companyName: companyName,
    origin: req.body.origin,
  });

  try {
    await smartphone.save();
    res.status(200).json("Company Added Successfully");
  } catch (err) {
    console.log(err);
  }
};

const updateData = async (req, res) => {
  const companyName = req.body.companyName;
  const existingSmartPhone = await SmartPhoneModel.findOne({
    companyName: companyName,
  });

  if (existingSmartPhone) {
    return res.status(400).json("Company Name Already Exists");
  }
  const updatedItem = {
    companyName: companyName,
    origin: req.body.origin,
  };
  try {
    await SmartPhoneModel.findByIdAndUpdate(req.params.id, updatedItem);
    res.status(200).json("Company Updated Successfully");
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async (req, res) => {
  try {
    await SmartPhoneModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Company Deleted Successfully");
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getAllData, addData, updateData, deleteData };
