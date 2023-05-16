let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Pretzel M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Fruit Snacks", price: 0.49 },
  { product: "Snickers", price: 2.75 },
  { product: "Milky Way", price: 3.25 },
  { product: "Bubbaloo", price: 1.5 },
  { product: "Kit Kat", price: 4.95 },
  { product: "Twix", price: 2.0 },
];

// Which candies costs less than $4.00?
const costsLessThan4 = products.filter((item) => item.price < 4);
costsLessThan4.forEach((item) => console.log(item.price));
console.log("---");
// Which candies has "M&M" its name?
const findMM = products.filter((item) => item.product.indexOf("M&M") !== -1);
findMM.forEach((item) => console.log(item.product));
console.log("---");
// Do we carry "Swedish Fish"?
const swedishFish = products.find((item) => item.product === "Swedish Fish");
if (swedishFish) {
  console.log("We have Swedish Fish.");
} else {
  console.log("No we do not have Swedish Fish.");
}
