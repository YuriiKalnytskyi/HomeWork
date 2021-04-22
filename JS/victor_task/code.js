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

// let a = [1,6,9,0,17,88,4,7];
// let b = a.reduce((acc,value)=>{
//     if (acc<value){
//         acc=value
//     }
//     return acc
// })
// console.log(b)

/*Отримати масив лише унікальних значень за допомогою reduce
[1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]*/

// let a = [1, 9, 0, 1, 5, 9, 1, 6];
// let b = a.reduce((acc, value) => {
//     if (!acc.includes(value)) {
//         acc.push(value)
//     }
//     return acc;
//
// }, [])
// console.log(b)

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

/*задание на асинхронность... подобно тому же заданию что и было на домашку....
задание называется "остаться в живых"

на начало дня у человека есть определенное количество энергии, пускай 1000
- человек проснулся потратил определенное количество энергии
- поел получил дополнительную энергию
- пошел на работу потратил енергию
и так придумать пунктов 10
на каждом шаге если энергия дошла до 0 то вывести сообщение к примеру "Вы умерли по пути на работу"*/

//
// function up (energy,cb) {
//     setTimeout(()=>{
//         if (energy>0 ){
//             console.log('я проснувся ');
//             cb(null,energy)
//         }
//         else {
//             cb('помер у сні ');
//         }
//     },100)
// }
//
// function brushYour(energy, cb) {
//     console.log('Йдем чистити зуби  ')
//     setTimeout(() => {
//         if (energy>0) {
//             console.log(`Чистимо зуби не менше 3 хв енегії залішілось `)
//             cb(null, energy -=200 );
//         } else {
//             cb('немає щітки')
//         }
//     }, 400)
// }
//
// function eat(energy, cb) {
//     setTimeout(() => {
//         if (energy>0) {
//             console.log('ох як смачно ')
//             cb(null,energy += 200)
//
//         } else {
//             cb(`отравився и помер ${energy}`)
//
//         }
//     }, 200)
// }
//
// function goWork(energy, cb) {
//     setTimeout(() => {
//         if (energy>0) {
//             console.log('йду на роботу ')
//             cb(null,energy -= 50)
//
//         } else {
//             cb(`подорозі помер ${energy}`)
//
//         }
//     }, 100)
// }
//
// function work(energy, cb) {
//     setTimeout(() => {
//         if (energy>0) {
//             console.log(' на роботі завал  ')
//             cb(null,energy -= 400)
//
//         } else {
//             cb(`помер від преревтомі на роботі  ${energy}`)
//
//         }
//     }, 500)
// }
//
// function eat2(energy, cb) {
//     setTimeout(() => {
//         if (energy>0) {
//             console.log('нарешті обід  ')
//             console.log('ох як смачно ')
//             cb(null, energy += 200)
//
//         } else {
//             cb(`отравився и помер ${energy}`)
//
//         }
//     }, 260)
// }
//
// function work2(energy, cb) {
//     setTimeout(() => {
//         if (energy>0) {
//             console.log(' на роботі завал  ')
//             cb(null,energy -= 300)
//
//         } else {
//             cb(`помер від преревтомі на роботі  ${energy}`)
//
//         }
//     }, 400)
// }
//
// function goHome(energy, cb) {
//     setTimeout(() => {
//         if (energy>0) {
//             console.log('йти до дому ')
//             console.log('треба зайти в магазин ')
//
//             cb(null,energy -= 200)
//
//         } else {
//             cb(`помер в черзі  вмагазині  ${energy}`)
//
//         }
//     }, 400)
// }
// function home(energy, cb) {
//     setTimeout(() => {
//         if (energy>0) {
//             console.log('нарешті дома ')
//             console.log('хатні клопоти ')
//             cb(null,energy -= 100)
//
//         } else {
//             cb(`упав вдарівся і помер  ${energy}`)
//
//         }
//     }, 600)
// }
// function film (energy, cb) {
//     setTimeout(() => {
//         if (energy>0) {
//             console.log('подівитісь фільі і спати ')
//             cb(null,energy -= 100)
//
//         } else {
//             cb(`помер  ${energy}`)
//
//         }
//     }, 300)
// }
// function finish (energy, cb) {
//     setTimeout(() => {
//         if (energy>0) {
//             console.log(`день закинсівся  енергія: ${energy}`)
//             cb(null,energy)
//
//         } else {
//             cb(`помер  ${energy}`)
//
//         }
//     }, 300)
// }
//
//
// up(1000 , (err , energy)=>{
//     if (!err){
//         console.log(energy)
//         brushYour(energy,(err ,energy)=>{
//             if (!err){
//                 console.log(energy)
//                 eat(energy,(err,energy)=>{
//                     if (!err){
//                         console.log(energy)
//                         goWork(energy,(err , energy)=>{
//                             if (!err){
//                                 console.log(energy)
//                                 work(energy,(err,energy)=>{
//                                     if (!err){
//                                         console.log(energy)
//                                         eat2(energy,(err,energy)=>{
//                                             if (!err){
//                                                 console.log(energy)
//                                                 work2(energy,(err,energy)=>{
//                                                     if (!err){
//                                                         console.log(energy)
//                                                         goHome(energy,(err,energy)=>{
//                                                             if (!err){
//                                                                 console.log(energy)
//                                                                 home(energy,(err, energy)=>{
//                                                                     if (!err){
//                                                                         console.log(energy)
//                                                                         film(energy,(err,energy)=>{
//                                                                             if (!err){
//                                                                                 console.log(energy)
//                                                                                 finish(energy,(err,energy)=>{
//                                                                                     if (!err){
//                                                                                         console.log(energy);
//                                                                                     }else {
//                                                                                         console.error(err)
//                                                                                     }
//                                                                                 })
//                                                                             }else {
//                                                                                 console.error(err)
//                                                                             }
//                                                                         })
//                                                                     }else {
//                                                                         console.error(err)
//                                                                     }
//                                                                 })
//                                                             }else {
//                                                                 console.error(err)
//                                                             }
//                                                         })
//                                                     }else {
//                                                         console.error(err)
//                                                     }
//                                                 })
//                                             }else {
//                                                 console.error(err)
//                                             }
//                                         })
//                                     }else {
//                                         console.error(err)
//                                     }
//                                 })
//                             } else {
//                                 console.error(err)
//                             }
//                         })
//                     } else {
//                         console.error(err)
//                     }
//                 })
//             } else {
//                 console.error(err)
//             }
//         } )
//     }else {
//         console.error(err)
//     }
// })

