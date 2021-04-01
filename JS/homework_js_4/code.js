/*1) створити функцію яка приймає масив та виводить його
2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.*/
//
// let arr = [12, true, 'hello', 'whe', 3424, 'your']
// let arr1 = [12, true, 'owu', 'whe', 3424, 'your']
// function myFunction(arr) {
//     // document.write(`arr = ${arr}`)
//     console.log(arr )
// }
// myFunction(arr);
// myFunction(arr1);
//
//
// let arr2 = [];
// function myFuRandom(arr2) {
//
//     for (let i = 0; i < 10; i++) {
//         arr2.push(Math.floor((Math.random()*100-10)+10))
//     }
//     console.log(arr2 )
// }
// myFuRandom(arr2);
// myFunction(arr2);

/*3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/
/* 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/

// function myFumin (a , b, c){
//     if ( a < b && a < c   ){
//         return a ;
//     }
//     else if ( b < a && b < c ){
//         return b
//     }
//     else if ( c < a && c < b ){
//         return c;
//     }
//     else {
//         return 0 ;
//     }
// }
// let a1 = +prompt('введіть число ');
// let b1 = +prompt('введіть число ');
// let c1 = +prompt('введіть число ');
//
// console.log(myFumin(a1, b1, c1));
//
// function myFumax (a , b, c){
//     if ( a > b && a > c   ){
//         return a ;
//     }
//     else if ( b > a && b > c ){
//         return b ;
//     }
//     else if ( c > a && c > b ){
//         return c ;
//     }
//     else {
//         return 0 ;
//     }
// }
//
// console.log(myFumax(a1, b1, c1));

/*5) створити функцію яка повертає найбільше число з масиву */

// let arr2 = [2, 4, 6, 7];
// function myFuRandom(arr) {
//     return Math.min(...arr);
// }
// console.log(myFuRandom(arr2));

/*створити функцію яка повертає найбільше число з масиву*/

// function myArrMax (arr){
//     let m =arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (m < arr[i]){
//             m = arr[i]
//         }
//     }
//     return m ;
// }
// let arr1 = myArrMax([1,54,78,2]);
// console.log(arr1);

/* створити функцію яка повертає найменьше число з масиву*/

// function myArrMin (arr){
//     let m = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < m){
//             m = arr[i]
//         }
//     }
//     return m ;
// }
// let arr1 = myArrMin([1,54,78,2]);
// console.log(arr1);

/*7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.*/

// function myArrMin (arr){
//     let sum =0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum ;
// }
// let arr1 = myArrMin([1,1,1,1]);
// console.log(arr1);

/*8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень  ?????? arguments  */
// function myArrMin (arr){
//     let sum =0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]/arr.length;
//     }
//     return sum ;
// }
// let arr1 = myArrMin([2,3,4,1]);
// console.log(arr1);

/*9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів*/

// let arr = [
//     {name: 'Dima', age: 13}, {model: 'Camry'},
//     {name: 'Ivan', age: 19}, {model: 'false'},
//     {name: 'Andriy', age: 30}, {model: 'Lanus'},
//     {name: 'Yura', age: 22}, {model: 'Camry'},
// ];
// let arr1=[];
// function arrOd (arr){
//     for (let arrElement of arr) {
//         for (let arrElementElement in arrElement) {
//             arr1.push(arrElementElement);
//         }
//     }
//     return arr1 ;
// }
// let arr2 = arrOd(arr)
// console.log(arr2);

/* 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів */
// let arr = [
//     {name: 'Dima', age: 13}, {model: 'Camry'},
//     {name: 'Ivan', age: 19}, {model: 'false'},
//     {name: 'Andriy', age: 30}, {model: 'Lanus'},
//     {name: 'Yura', age: 22}, {model: 'Camry'},
// ];
// let arr1=[];
// function arrOd (arr){
//     for (let arrElement of arr) {
//         for (let arrElementElement in arrElement) {
//             arr1.push(arrElement[arrElementElement])
//         }
//     }
//     return arr1 ;
// }
// let arr2 = arrOd(arr)
// console.log(arr2);

/*11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив. */

// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
// let sum = 0 ;
// let arr=[];
// function myArr (arr1,arr2){
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (i === j){
//                 sum = arr1[i]+arr2[j] ;
//                 arr.push(sum);
//             }
//         }
//     }
//     return arr ;
// }
// let muArr1 = myArr([1,2,3,4],[2,3,4,5]);
// console.log(muArr1);

/*створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);*/

// function myArr (arr){
//     let max=arr[0];
//     let min=arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max<arr[i]){
//             max = arr[i];
//         }
//         if (arr[i]<min){
//             min=arr[i];
//         }
//     }
//     console.log(max);
//     return min
// }
// let newArr = myArr([-2,-7,-1,-9,-1,-6]);
// console.log(newArr);

/*- Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.*/

// let arr = [
//     {name: 'Dima', age: 13}, {model: 'Camry'},
//     {name: 'Ivan', age: 19}, {model: 'false'},
//     {name: 'Andriy', age: 30}, {model: 'Lanus'},
//     {name: 'Yura', age: 22}, {model: 'Camry'},
// ];
// let arr1 = [];
//
// let a = confirm('якщо ок то ключі  , отмена - значення  ')
// function myArr(arr){
//     for (let argument of arr){
//         for (let argument1 in argument) {
//             if (a === true){
//                 arr1.push(argument1)
//             }else if (a === false){
//                     arr1.push(argument[argument1])
//             }
//         }
//     }
//     return arr1 ;
// }
// let my = myArr(arr);
// console.log(my);

/*- Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1" */

// function myArr(arr) {
//     let i = 1 ;
//     let p ;
//     for (let j = 0; j < arr.length; j++) {
//         if (i === j){
//             p = arr[j]
//             arr[j]=arr[i+1]
//             arr[i+1]=p
//         }
//     }
//     return arr
// }
// let newArr = myArr([2,6,7,2,7]);
// console.log(newArr);

/*Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100*/

// let arr = [1,0,6,0,3];
// function myArr (arr){
//     for (let i = arr.length-1; i >=0; i--) {
//         if(arr[i]===0){
//             arr.push(arr[i]);
//             arr.splice(i,1);
//         }
//     }
//     return arr ;
// }
// let newArr = myArr(arr);
// console.log(newArr);

/*Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд ?????????????????????????????????*/
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// let n1_1 = n1.trim()
// console.log(n1_1);
// let n11 = n1_1.split(' ');
// console.log(n11);
// let arr = [];
// for (let i = 0; i < n11.length; i++) {
//     if (n11[i] !== '') {
//         arr.push(n11[i])
//
//     }
// }
// const concatFunction=(array)=>{
// for (let i=0;i<array.length;i++){
//
//     console.log(array[0].concat(' ', array[i]));
// }
// }
//
// concatFunction(arr)

/*Додає в боді блок з текстом "Hello owu"*/

// function txt (txt){
//     let tx1 = document.createElement('div')
//     tx1.innerText = txt;
//     document.body.appendChild(tx1);
// }
//
// console.log(txt('Hello ow'));

/*- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи*/

// function txt (){
//     for (let argument of arguments) {
//         let tx1 = document.createElement('div')
//         tx1.innerText = argument;
//         document.body.appendChild(tx1);
//     }
// }
// console.log(txt('Hello ow', 'world'));

/*приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці*/

let arr = ['BMV', 'Lanos','Tesla','Audi'];
function car (cars){
    for (let argument of cars) {
        let newArr = arr.push(argument)
        console.log(newArr)
    }
}
car('lada','WV')



