const express = require("express");
const {
  updateData,
  deleteData,
  getAllData,
  addData,
} = require("../controllers/smartPhonesController");

const router = express.Router();

router.route('/').get(getAllData).post(addData)
router.route("/:id").put(updateData).delete(deleteData);

module.exports = router;
