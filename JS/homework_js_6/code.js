/*1) Створити масив з 20 чисел та: */

// let nambers = [1,4,9,7,6,3,7,14,76,12,45,68,23,98,78,98,64,32,64,166]
//
// /* a) відсортувати його від меншого до більшого.*/
// let nambers1 = nambers.sort((a,b)=>{
// return a-b ;
// });
// /* b) відсортувати його від більшого до меншого.*/
// console.log(nambers1);
// let nambers2 = nambers.sort((a,b)=>{
//     return b-a ;
// });
// console.log(nambers2);
//
// /* c) Відфілтрувати числа які є кратними 3*/
//
// let arr3=[];
//     nambers.filter(value =>{
//     if (value%3 ===0 ){
//         arr3.push(value)
//     }
// } );
//
// console.log(arr3);
//
// /* d) Відфілтрувати числа які є більшими за 10.*/
//
// let arr4=[];
// nambers.filter( value => {
//     if (value > 10){
//         arr4.push(value)
//     }
// });
// console.log(arr4);
//
// /*e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write */
//
// let nambers3 = nambers.forEach(value => {
//     document.write(value);
//     document.write(`<br/>`);
// });
//
// /*f) За допомогою map збільшити кожен елемент в масиві в три рази.*/
// let map =nambers.map((number)=>number*3);
// console.log(map);
//
// /* g) Порахувати загальну суму всіх елментів у масиві (reduce*/
//
// let nambers4  =nambers.reduce((acc, customElements)=>{
//     // console.log(acc);
//     // console.log(customElements);
//     return acc + customElements ;
// },0);
// console.log(nambers4);


/*2) Створити масив з 20 стрічок та:*/

// let str = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew', 'Stepan','vasya','petya','kolya','max','olya', 'anya' , 'oleg',
//     'andrey' ,'masha','olya','max' , 'Ivan ' ,'viktor','nasty'] ;
//
// /* a) Відсортувати його в алфавітному порядку */
// let str1 = str.sort((a,b)=>{
//     if (a<b){
//         return -1;
//     }
//     return 1 ;
// });
// console.log(str1);
// /* b) Відсортувати в зворотньому порядку */
// let str2 = str.sort((a,b)=>{
//    if (a<b){
//        return 1 ;
//    }
//    return -1 ;
// });
// console.log(str2);
//
// /* c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)*/
//
// let strSort = str.filter(name=>name.length >4);
// console.log(strSort);
//
// /* d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'*/
//
// let strMap = [];
//     str.map(value => {
//     value = 'Sam says '+ value;
//         strMap.push(value);
// })
// console.log(strMap);

/*3) Все робити тільки за допомогою методів масивів! */

// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];

// /* a) відсортувати його за  віком (зростання , а потім окремо спадання) */
//
// let usersSort = users.sort((a,b)=>{
//     return a.age - b.age ;
// });
// console.log(usersSort);
//
// let usersSort1 = users.sort((a,b)=>{
//     return b.age - a.age ;
// });
// console.log(usersSort1);
//
// /*b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання) */
//
// let sort = users.sort((a,b)=>{
//     return a.name.length -b.name.length ;
// });
// console.log(sort);
//
// let sort2 = users.sort((a,b)=>{
//     return b.name.length -a.name.length ;
// });
// console.log(sort2);

/*c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
   та зберегти це в новий масив (первинний масив залишиться без змін)*/

// let usersMap = users.map((value,index)=>{
//     return {
//         id: index + 1,
//         ...value
//     }
// });
// console.log(usersMap);
//
// /*d) відсортувати його за індентифікатором*/
// let sort3 = usersMap.sort((a,b)=>{
//     return b.id - a.id ;
// });
// console.log(sort3);

/*e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce) */

// let usersRedus = users.reduce((acc ,values)=>{
//     if (values.isMarried === true){
//         values.flat= true;
//         acc.push(values);
//     }
//     return acc ;
// },[]);
// console.log(usersRedus);


/* цогго  завдання немає в домашці це просто для саморозвидку  */

// let msps = users.filter(value => value.name.startsWith('m'));
// console.log(msps);
// let usersRedus1 = msps.reduce((acc, values)=>{
//     if (values.age >28){
//         values.prava = true ;
//         acc.push(values)
//     }
//     return acc ;
// },[]);
// console.log(usersRedus1);

/*==================================== РОБОТА В АУДИТОРІЇ  =================================*/


/*Відфільтрувати масив за наступними крітеріями :*/

// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
// /*- двигун більше 3х літрів */
// let filter = cars.filter((value ) => {
//     if (value.volume > 3){
//         return value ;
//     }
//     // або отак але if закоментувати  return value.volume > 3 ;
// });
// console.log(filter);
//
// /*- двигун = 2л */
// let filter1 = cars.filter((value) => {
//    return value.volume===2 ;
// });
// console.log(filter1);
//
// /*- виробник мерс */
// let filter2 = cars.filter((value) =>{
//     return value.producer==='mercedes'
// } );
// console.log(filter2);
//
// /*- двигун більше 3х літрів + виробник мерседес */
// let filter3 = cars.filter((value) =>{
//     if (value.volume > 3 && value.producer === 'mercedes'){
//        return value
//     }
// });
// console.log(filter3);
//
// /*- двигун більше 3х літрів + виробник субару*/
// let filter4 = cars.filter((value) =>{
//     if (value.volume > 3 && value.producer === 'subaru'){
//         return value
//     }
// });
// console.log(filter4);
//
// /*- сили більше ніж 300 */
// let filter5 = cars.filter((value) =>{
//     if (value.power > 300 ){
//         return value
//     }
// });
// console.log(filter5);
//
// /*- сили більше ніж 300 + виробник субару */
// let filter6 = cars.filter((value) =>{
//     if (value.power > 300 && value.producer === 'subaru'){
//         return value
//     }
// });
// console.log(filter6);
//
// /*- мотор серіі ej*/
// let filter7 = cars.filter(value => value.engine.startsWith('ej'))
// console.log(filter7);
//
// /*- сили більше ніж 300 + виробник субару + мотор серіі ej */
// let filter8 = cars.filter((value) =>{
//     if (value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej') ){
//         return value
//     }
// });
// console.log(filter8);
//
// /*- двигун меньше 3х літрів + виробник мерседес */
// let filter9 = cars.filter((value) => {
//     if (value.volume<3 && value.producer === 'mercedes'){
//         return value ;
//     }
// });
// console.log(filter9);
//
//
// /*- двигун більше 2л + сили більше 250 */
// let filter10 = cars.filter((value) => {
//     if (value.volume>2 && value.power){
//         return value ;
//     }
// });
// console.log(filter10);
//
// /* - сили більше 250  + виробник бмв*/
//
// let filter11 = cars.filter((value) => {
//     if (value.power>250 && value.producer==='bmw'){
//         return value ;
//     }
// });
// console.log(filter11);

/*взять слдующий массив*/

// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// /*-- Відсортувати їх по ID*/
//
// let sortId= usersWithAddress.sort((a,b)=>{
//     return a.id - b.id;
// });
// console.log(sortId);
// /*-- Відсортувати їх по ID в зворотньому порядку */
// let sortId1= usersWithAddress.sort((a,b)=>{
//     return b.id - a.id;
// });
// console.log(sortId1)
//
// /*-- Відсортувати по віку */
// let sortId2= usersWithAddress.sort((a,b)=>{
//     return a.age - b.age;
// });
// console.log(sortId2)
//
// /*-- Відсортувати по віку в зворотньому порядку*/
// let sortId3= usersWithAddress.sort((a,b)=>{
//     return b.age + a.age;
// });
// console.log(sortId3)
//
// /*-- Відсорутвати по імені */
// let sortName = usersWithAddress.sort((a, b) => {
//     if (a.name < b.name){
//         return -1;
//     }
//     return 1 ;
// });
// console.log(sortName);
//
// /*-- Відсорутвати по назві вулиці */
// let sortStrit = usersWithAddress.sort((a, b) => {
//     if (a.address.street < b.address.street){
//         return -1;
//     }
//     return 1 ;
// });
// console.log(sortStrit);
//
// /*-- Відсорутвати по номеру будинку */
// let sortNumber = usersWithAddress.sort((a, b) => {
//     if (a.address.number < b.address.number){
//         return -1;
//     }
//     return 1 ;
// });
// console.log(sortNumber);
//
// /*-- Залигити тільки тих, хто молодший ніж 30 (filter) */
// let sortAge = usersWithAddress.filter(value => {
//     if(value.age<30){
//         return value ;
//     }
// });
// console.log(sortAge);
//
// /*-- Залишити тільки одружених */
// let sortIsMarried =  usersWithAddress.filter(value => value.isMarried===true);
// console.log(sortIsMarried);
//
// /*-- Залишити тільки одружених, які молодні за 30 */
// let sortIsMarriedI =  usersWithAddress.filter(value => value.isMarried===true && value.age<30);
// console.log(sortIsMarriedI);
//
// /*-- Залишити лише тих, в кого парні номери будинків.*/
// let sortNamders1 = usersWithAddress.filter(value => value.address.number%2===0 );
// console.log(sortNamders1);
//
// /* -- Порахувати загальний вік всіх людей. (reduce)*/
// let ageReduce = usersWithAddress.reduce((acc,currentValue)=>acc + currentValue.age,0);
// console.log(ageReduce);
//
// /*-- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce) */
// let ageReduce1 =usersWithAddress.reduce((acc ,currentValue)=>{
//     if (currentValue.isMarried === true && currentValue.age> 30){
//         currentValue.child = true ;
//         acc.push(currentValue)
//     }
//     return acc ;
// },[]);
// console.log(ageReduce1);


let car = [
    {Vlasnyk: {name: 'vasya', age: 31, drivingeEperience: 10}, model: "subaru", power: 450, price: 1596, year: 2010},
    {Vlasnyk: {name: 'petya', age: 30, drivingeEperience: 4}, model: "subaru", power: 205, price: 1357, year: 2007},
    {Vlasnyk: {name: 'kolya', age: 29, drivingeEperience: 7}, model: "subaru", power: 300, price: 2324, year: 2011},
    {Vlasnyk: {name: 'olya', age: 28, drivingeEperience: 2}, model: "bmw", power: 120, price: 5455, year: 1998},
    {Vlasnyk: {name: 'max', age: 30, drivingeEperience: 9}, model: "bmw", power: 120, price: 7654, year: 2014},
    {Vlasnyk: {name: 'anya', age: 31, drivingeEperience: 11}, model: "bmw", power: 350, price: 9624, year: 2014},
    {Vlasnyk: {name: 'oleg', age: 28, drivingeEperience: 5}, model: "mercedes", power: 180, price: 4324, year: 2013},
    {Vlasnyk: {name: 'andrey', age: 29, drivingeEperience: 7}, model: "mercedes", power: 400, price: 1335, year: 2009},
    {Vlasnyk: {name: 'masha', age: 30, drivingeEperience: 3}, model: "mercedes", power: 230, price: 4457, year: 2012},
    {Vlasnyk: {name: 'slavik', age: 30, drivingeEperience: 8}, model: "tesla", power: 400, price: 20000, year: 2019}
];
/*Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).*/

// цей код не працює

let cars = car.map((car,index , k) => {
    if(index<=k.length /2 ){
        car.remont = true ;
        car.power += 0.1 * car.power ;
        return car
    }

    else {
        car.remont = false ;
        return car
    }
});
console.log(cars);

let car11 = cars.map((car)=>{
    if (car.remont !== true){
        car.Vlasnyk.name = ' new Vlasnyk';
    }
    return car ;
});
console.log(car11);


// let cars = car.reduce((acc, currentValue, currentIndex) => {
//     if (currentValue.length / 2){
//
//     }
// });



// /*Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%*/
// let cars1  = car.forEach((value,index)=>{
//     if(index%2===0){
//         value.power += 0.1*value.power ;
//         value.price += 0.05*value.price
//         console.log(value);
//     }
// });

// /*Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.*/

// let cars2 = car.filter((value) =>{
//     if(value.Vlasnyk.drivingeEperience <5 && value.Vlasnyk.age ){
//         value.curs = 'курси на 1 рік' ;
//         return value ;
//     }
// });
// console.log(cars2);

// /*Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі */
// let cars3 = car.reduce((acc, currentValue) =>{
//     return  acc +currentValue.price ;
// },0);
// console.log(cars3);