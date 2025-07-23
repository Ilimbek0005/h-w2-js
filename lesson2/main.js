//Циклы, массивы, методы массива.

// const numbers = [12, 23, 0, -34, 2, 1, 2, 23, 34, 34]

// const arr = [12, 23, 0, 'Ilim']

// console.log(arr)

// const clients = [
//     { name:'ilim', age:21 },
//     { name:'igor', age:22 },
//     { name:'islam', age:23 },
//     { name:'inna', age:24 },
//     { name:'irra', age:25 },
// ]

// for (let i = 0; i < clients.length; i++) {
// console.log(`Здарвствуйте ${clients[i].name}`)
// }


// const result = numbers.filter(el => el % 2 === 0)
// console.log(result
// )

// const exampleValue = numbers.find((el) => el === 1)
// console.log(exampleValue)


const user = [
{ login: 'ilim', password:'123456'}
]

let login = prompt('введите логин:')
let password = prompt('введите пароль:')

if ( login === user.login && password === user.password){
    console.log('Добро пожаловать!')
} else{ 
    console.log('Неверный логин или пароль')
}

// const user = [
//   { login: 'ilim', password: '123456' }
// ];

// let login = prompt('Введите логин:');
// let password = prompt('Введите пароль:');

// console.log('Ваш логин: ', login);
// console.log('Ваш пароль: ', password);

// // Проверка
// if (login === user[0].login && password === user[0].password) {
//   console.log('Добро пожаловать!');
// } else {
//   console.log('Неверный логин или пароль');
// }
