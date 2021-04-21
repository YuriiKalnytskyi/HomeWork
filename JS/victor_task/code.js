// /*написати прогу яка вибирає зі строки числа і виводить їх
// так як вони написані
// наприклад:
//   const st = 'as 23 fdf25dg544 34s5 5'
//   23, 25,544, 34, 5,5*/

// let newArr= [];
// let st = 'as 23 fdf25dg544 34s5 5';
// let st1 = st.toLowerCase();
// let st2= st1.replace(/[a-z]/g,' ') ;
// let st3 = st2.split(" ");
// console.log(st3);
// for (let i = 0; i < st3.length; i++) {
// if (st3[i]!==''){
//     newArr.push(parseInt(st3[i]))
//
// }
// }
// console.log(newArr);

/*                                  ментор завдання                     */

/* калькулятор можешь сделать с разными колбеками
всмысле сделай функцию калькулятор которая будет принимить числа а и б и колбек
 в зависимости какой колбек то такое и действие +*/

// function calculator (a , b , cb) {
//     cb(a,b);
// }
// calculator(6, 4, function (a , b){
//     console.log(a+b);
// })
// calculator(6,4,function (a,b){
//     console.log(a-b);
// })
// calculator(6,4,function (a,b){
//     console.log(a*b);
// })
// calculator(6,4,function (a,b){
//     console.log(a/b);
// })

/*Знайти анаграму.
Перевірити чи слово має в собі такі самі літери як і поеперднє слово.

ANAGRAM | MGANRAA -> true
EXIT | AXET -> false
GOOD | DOGO -> true*/

// let str = 'ANAGRAM';
// let str2 = 'MGANRAA';
//
//  let a  = str.split('');
// console.log(a);
// let a2  = str2.split('');
// console.log(a2);
//
// let strSort = a.sort();
// let str2Sort = a2.sort();
//
// let q = strSort.join("")
// let q2 = str2Sort.join("")
//
// console.log(q===q2)

/*Палиндром
Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.*/

// let str = 'NaNa'
// let a = str.split('').reverse().join('');
// if (a===str){
//  console.log('YES')
// }else if (a!==str){
//  console.log('No')
// }

/*Вирівняти багаторівневий масив в однорівневий
[1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
flat використовувати заборонено*/

// let newArr = [];
// function flat(arr) {
//     for (let arrElement of arr) {
//         if (Array.isArray(arrElement)) {
//             flat(arrElement)
//         }
//         else {
//             newArr.push(arrElement)
//         }
//     }
//     return newArr  ;
// }
// let arr = flat([1,3, ['Hello', 'Word', [9,6,1]], ['oops'], 9]);
// console.log(arr);

/*Знайти набільший елемент в масиві за допомогою reduce
[1,6,9,0,17,88,4,7] -> 88*/

