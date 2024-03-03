// foodModel.js
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  foodGroup: String,
  description: String,
  // Add other fields based on your requirements
}, { timestamps: true });

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
