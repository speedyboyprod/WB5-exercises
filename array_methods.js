let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

// part a
function getCartItems(cartItem) {
  return cartItem.item;
}

const cartItems = cart.map(getCartItems);

function showCartItems(cartItem) {
  console.log(cartItem);
}

cartItems.forEach(showCartItems);

console.log("----");

//part b
function getCartTotal(currentSum, item) {
  return currentSum + item.price * item.quantity;
}

const totalDue = cart.reduce(getCartTotal, 0);
console.log(totalDue);
console.log("----");

//part c
cart.sort(function (a, b) {
  if (a.item < b.item) return -1;
  else if (a.item === b.item) return 0;
  else return 1;
});

for (let i = 0; i < cart.length; i++) {
  console.log(cart[i].item);
}
