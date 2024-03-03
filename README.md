

# Food and Nutrition API

The Food and Nutrition API is a comprehensive solution for managing information about various food items, including detailed nutritional values, allergens, preparation methods, certifications, and more. This API is built using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Example Requests](#example-requests)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/food-nutrition-api.git
   cd food-nutrition-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure MongoDB:

   - Start your MongoDB server.

4. Run the API:

   ```bash
   node app.js
   ```

   The API will be running on `http://localhost:3000` (or another port if specified).

## Usage

### API Endpoints

- **POST /food**: Create a new food item.
- **GET /food**: Retrieve all food items.
- **GET /food/:id**: Retrieve a specific food item by ID.
- **PUT /food/:id**: Update a food item.
- **DELETE /food/:id**: Delete a food item.

### Example Requests

#### Create a new food item:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "itemName": "Avocado",
  "foodGroup": "Fruits",
  "description": "A creamy and nutritious fruit.",
  "nutritionalInformation": {
    "calories": 160,
    "macronutrients": {
      "proteins": 2,
      "fats": {
        "total": 15,
        "saturated": 2,
        "unsaturated": 13,
        "trans": 0
      },
      "carbohydrates": 9,
      "sugar": 0.2
    },
    "micronutrients": {
      "vitamins": {
        "a": 146,
        "c": 10
      },
      "minerals": {
        "potassium": 485
      }
    },
    "fiber": 7,
    "sodium": 7,
    "cholesterol": 0
  },
  "servingSize": "1 medium avocado",
  "allergens": [],
  "ingredients": ["Avocado"],
  "preparationMethods": "Raw",
  "certifications": ["Organic"],
  "countryOfOrigin": "Mexico",
  "brandOrManufacturer": "Farm Fresh",
  "dietaryRestrictions": ["Vegetarian", "Vegan"],
  "healthBenefits": "Rich in healthy fats, vitamins, and minerals.",
  "bestPractices": "Store in a cool, dark place."
}' http://localhost:3000/food
```

#### Retrieve all food items:

```bash
curl http://localhost:3000/food
```

## Database Schema

The MongoDB schema for the food items includes the following fields:

- `itemName`
- `foodGroup`
- `description`
- `nutritionalInformation`
- `servingSize`
- `allergens`
- `ingredients`
- `preparationMethods`
- `certifications`
- `countryOfOrigin`
- `brandOrManufacturer`
- `dietaryRestrictions`
- `healthBenefits`
- `bestPractices`


