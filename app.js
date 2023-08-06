function listAllFoodItems(data) {
  return data.map(item => item.name);
}

function listFoodItemsByCategory(data, category) {
  return data.filter(item => item.category === category).map(item => item.name);
}

function listFoodItemsWithCalorieAbove(data, calorieThreshold) {
  return data.filter(item => item.calorie > calorieThreshold).map(item => item.name);
}

function listFoodItemsWithCalorieBelow(data, calorieThreshold) {
  return data.filter(item => item.calorie < calorieThreshold).map(item => item.name);
}

function listFoodItemsByProtein(data) {
  return data.sort((a, b) => b.protein - a.protein);
}

function listFoodItemsByCarbohydrate(data) {
  return data.sort((a, b) => a.carbohydrate - b.carbohydrate);
}
