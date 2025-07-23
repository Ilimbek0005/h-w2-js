const students = [
  { name: 'Александр', age: 21 },
  { name: 'Иван', age: 19 },
  { name: 'Олег', age: 23 }
];

for (let i = 0; i < students.length; i++) {
  if (students[i].name === 'Иван') {
    console.log(students[i].age); 
  }
}


const numbers = [5, 10, 3, 7];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); 
