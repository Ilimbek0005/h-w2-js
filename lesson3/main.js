//функция 

//  1 - function declaration

// function printName(name) {
//     console.log(`Hello ${name}`);
// }

// printName('Mangus');

// // функции могут принимать параметры


// function calculateAndlog(num, num2) {
//     // const num =5;
//     // const num2 = 10;
//     const result = num + num2;
//     console.log('Result:', result)
// }

// calculateAndlog(5, 5)
// calculateAndlog(10, 10)
// calculateAndlog(100, 100)
// calculateAndlog(50, 20)

// 2 - function expression ( Стрелочная функция )

// const calculateAndlog = (num, num2) => {
//     const result = num + num2;
//     console.log('Result:', result)
// }
// calculateAndlog(12, 8)

// функции могут возвращать результаты выполнения
// function sum (num, num2) {
//     const result = num + num2;
//     return result
// }

// const res1 = sum(5, 10)
// console.log (res1);


// переменные - это у нас что это 
// функции это у нас что делает

// function sum (num, num2) {
//     const result = num + num2;
//     // console.log(result);
//     return result;
// }

// const res1 = sum(5, 10)
// console.log (res1);

// callback function
// find 

// const students = ['Adilet', 'Muha', 'Alihan', 'Aknazar'];
// const teachers = ['Oleg', 'Igor',];

// const adi = students.find((el) => el === 'Adilet')

// console.log(adi)

// const findStudentByName = (arr, name) => {
//     let result = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === name)
//             result=arr[i];
//     }
//     return result
// };

// const adi = findStudentByName(students, 'Adilet');
// const teachcer1 = findStudentByName(teachers, 'Igor');

// console.log(adi);
// console.log(teachcer1)
