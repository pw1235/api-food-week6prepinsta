// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const foodController = require('./foodController');

const app = express();

app.use(bodyParser.json());

// Routes
app.post('/food', foodController.createFoodItem);
app.get('/food', foodController.getAllFoodItems);
app.get('/food/:id', foodController.getFoodItemById);
app.put('/food/:id', foodController.updateFoodItem);
app.delete('/food/:id', foodController.deleteFoodItem);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
