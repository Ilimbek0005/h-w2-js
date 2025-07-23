const products = [
  { name: 'Телефон', price: 500 },
  { name: 'Наушники', price: 150 },
  { name: 'Чехол', price: 50 }
];

function getTotalPrice(products) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price;
  }
  return total;
}

console.log(getTotalPrice(products)); 


const numbers = [3, 7, 1, 9];

function getMaxNumber(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(getMaxNumber(numbers));
