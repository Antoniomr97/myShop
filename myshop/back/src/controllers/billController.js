const billModel = require("../models/Bill");

//CREATE NEW PRODUCT
const addBill = async (req, res) => {
  try {
    const billData = req.body;
    const newBill = await billModel.create({
      userId: billData.userId,
      totalPrice: billData.totalPrice,
    });
    res.status(200).json({
      status: "succeeded",
      data: newBill,
      error: null,
    });
  } catch (error) {
    console.error("Error creating the bill:", error);
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

module.exports = {
  addBill,
};
