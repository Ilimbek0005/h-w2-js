// методы массива: push; pop; shift; unshift; map; includes


 const animals = ['lion', 'cat', 'dog']

// 1) push - добавить новый элемент в конец массива

//  console.log(animals)
//  animals.push('Jaguar')
// console.log(animals)

// 2) pop - удаляет последний элемент из массива

//  console.log(animals)
//  animals.pop()
// console.log(animals)

// 3) unshift - добавляет новый элемент в начало массива 

//  console.log(animals)
//  animals.unshift('Pyhton')
// console.log(animals)

// 4) shift - удаляет первый элемент массива 

//  console.log(animals)
//  animals.shift()
// console.log(animals)

// Метода для поиска - find, includes

// const isDog = animals.includes('dog')
// console.log(isdog)

// const isDog = animals.includes('dog');
// console.log(isDog);

// 5) map

// const numbers = [2, 3, 4, 5]
// //[4, 6, 8, 10]
// const newNubers = numbers.map((num) => num * 2 )

// console.log(newNubers)

// Создать новый массив имен - ['Anna', 'Olay', 'Ivan', 'Oleg']

const users = [
    { name: 'Anna', age: 25},
    { name: 'Olay', age: 30},
    { name: 'Ivan', age: 20},
    { name: 'Oleg', age: 50},
]

// const userNames = users.map(user => user.name)

// console.log(userNames)

// const userNames = users.map((user) => user.name)
// console.log(userNames)

const transformUsers = (arr) => {
  const result = []

  for (const value of arr) {
    result.push(value.name)
  }

  return result
}

const userNames = transformUsers(users)
console.log(userNames)