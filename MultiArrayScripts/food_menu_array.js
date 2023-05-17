let menu = [
  [
    { item: "Sausage and Egg Biscuit", price: 3.69 },
    { item: "Bacon and Egg Biscuit", price: 3.49 },
    { item: "Ham and Egg Biscuit", price: 3.29 },
  ],
  [
    { item: "Chicken Sandwich", price: 4.26 },
    { item: "Bacon Burger", price: 4.2 },
    { item: "Lunch Item", price: 5.15 },
    { item: "Lunch Item", price: 4.55 },
  ],
  [
    { item: "dinner items", price: 7.1 },
    { item: "dinner items", price: 6.6 },
    { item: "dinner items", price: 5.45 },
    { item: "dinner items", price: 6.96 },
    { item: "dinner items", price: 8.15 },
  ],
];

const meal = 0;
if (meal === 0) {
  console.log("Breakfast Menu");
} else if (meal === 1) {
  console.log("Lunch Menu");
} else if (meal === 2) {
  console.log("Dinner Menu");
}

menu[meal].forEach((meals) => console.log(meals.item, meals.price));
