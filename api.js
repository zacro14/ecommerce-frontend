
const faker = require('faker');

let database = { product: []};
const threshold = 10;

for (let i = 1; i<= threshold; i++) {
database.product.push({
  id: i,
  productname: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  image: faker.image.fashion(),
  color: faker.commerce.color(),
});
}
 
console.log(JSON.stringify(database))
