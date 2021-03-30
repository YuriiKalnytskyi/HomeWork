/* 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

/*      a) отримує текст з параграфа з id "content"  */

// const contentId = document.getElementById('content');
// console.log(contentId);
// console.log(contentId.innerText);

/*      b) отримує текст з блоку з id "rules" */

// const rulesId = document.getElementById('rules');
// console.log(rulesId);
// console.log(rulesId.innerText);

/*   c) замініть текст параграфа з id 'content' на будь-який інший  */
// const contentId = document.getElementById('content');
// console.log(contentId);
// console.log(contentId.innerText);
// console.log(contentId.innerText = 'Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе. Второе правило Бойцовского\n' +
//     '    клуба: никогда никому не рассказывать о Бойцовском клубе. Третье правило Бойцовского клуба: в схватке\n' +
//     '    участвуют только двое. Четвертое правило Бойцовского клуба: не более одного поединка за один раз');
//

/*    d) замініть текст параграфа з id 'rules' на будь-який інший */

// const rulesId = document.getElementById('rules');
// console.log(rulesId);
// console.log(rulesId.innerText);
// rulesId.innerText = 'Четвертое правило Бойцовского клуба: не более одного поединка за один раз'
// console.log(rulesId.innerText);

/*    e) змініть кожному елементу колір фону на червоний */

// const contentId = document.getElementById('content');
// console.log(contentId);
// contentId.style.backgroundColor = 'red';

/*    f) змініть кожному елементу колір тексту на синій  */

// const rulesId = document.getElementById('rules');
// console.log(rulesId);
// rulesId.style.backgroundColor = 'blue'

/*   g) отримати весь список класів елемента з id=rules і вивести їх в console.log */

// const rulesId = document.getElementById('rules');
// console.log(rulesId.classList);

/*    h) отримати всі елементи з класом fc_rules */

// const fc = document.getElementsByClassName('fc_rules');
// console.log(fc);

/*    i) поміняти колір тексту у всіх елементів fc_rules на червоний */

// const fc = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < fc.length; i++) {
//    fc[i].style.backgroundColor = 'red';
// }

/* 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
   Вставити цей блок на сторінку
3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
   Блок з адресою зробити окремим блоком, з блоками для кожної властивості
*/

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
/* 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
   Вставити цей блок на сторінку
*/
// for (let i = 0; i < users.length; i++) {
//     let users1= document.createElement('div');
//     users1.innerText = `${users[i].name} ${users[i].age} ${users[i].status} ${users[i].address.city} ${users[i].address.country} ${users[i].address.houseNumber} ${users[i].address.street}`
//     document.body.appendChild(users1 );
// }
/* 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
   Блок з адресою зробити окремим блоком, з блоками для кожної властивості */

// for (let i = 0; i < users.length; i++) {
//     let users1 = document.createElement('div');
//     users1.innerText = `${users[i].name} ${users[i].age} ${users[i].status} `
//     users1.style.backgroundColor = 'red'
//
//     let users2 = document.createElement('div');
//     let users3 = document.createElement('p');
//     users3.innerText = ` ${users[i].address.city}
//     ${users[i].address.country}
//     ${users[i].address.street} ${users[i].address.houseNumber} `;
//
//     users2.style.backgroundColor = 'blue';
//     users2.style.backgroundColor = 'pink';
//
//     document.body.appendChild(users1);
//     users1.appendChild(users2);
//     users2.appendChild(users3);
// }

/* 1) Напишіть код, який :*/
/*     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year) */

// let main = document.getElementById('main_header');
// main.style.color = 'red';
// main.innerText = 'mon-year'

/*    b) робить шириниу елементу ul 400px */
//
// let ul = document.getElementsByTagName('ul');
//
// ul[0].style.width ='400px' /* 1 посіб */
//
// for (let i = 0; i < ul.length; i++) {
//     ul[i].style.width ='400px'
// }

/*    c) робить шириниу всіх елементів з класом linkList шириною 50% */

// let link = document.getElementsByClassName('linkList');
// for (let i = 0; i < link.length; i++) {
//     link[i].style.width ='50%';
// }

/*    d) отримує текст який зберігається в елементі з класом listElement2 */

// let link = document.getElementsByClassName(' listElement2');
// for (let i = 0; i < link.length; i++) {
//     console.log(link[i].innerHTML);
// }

/* e) отримує всі елементи li та змінює ім колір фону на сірий*/

// let link = document.getElementsByTagName('li');
// for (let i = 0; i < link.length; i++) {
//     link[i].style.backgroundColor = 'silver';
// }

/*    f) отримує всі елементи 'a' та додає їм клас anchor */

// let link = document.getElementsByTagName('a');
// for (let i = 0; i < link.length; i++) {
//     link[i].classList.add('anchor');
// }

/*    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів*/

// let link = document.getElementsByTagName('a');
// for (let i = 0; i < link.length; i++) {
//     if (link[i].innerText === 'link3' ){
//         link[i].style.fontSize = '40px';
//     }
// }
/*    h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a*/

// let link = document.getElementsByTagName('a');
// for (let i = 0; i < link.length; i++) {
//     link[i].classList.add(`element_${link[i].innerText}`);
// }

/*    i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()*/

// let sub = document.getElementsByClassName('sub-header');
// let a = prompt('введіть колір')
// for (let i = 0; i < sub.length; i++) {
//     sub[i].style.background = a ;
// }

/*    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()*/
//
// let sub = document.getElementsByClassName('sub-header');
// let a = prompt('введіть колір')
// for (let i = 0; i < sub.length; i++) {
//     if (sub[i].innerText === 'content 2 segment' ){
//         sub[i].style.background = a ;
//     }
// }

/*    k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()*/

// let sub = document.getElementsByClassName('content_1');
// let a = prompt('Введіть текст ')
// for (let i = 0; i < sub.length; i++) {
//     sub[i].innerText = a ;
// }

/*    l) отримати елементи p та змінити їм padding на 20px */

// let p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.fontSize = '20px'
// }

/*    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year) */

// let text = document.getElementsByClassName('text2');
// for (let i = 0; i < text.length; i++) {
//     text[i].innerText = 'mon-year'
// }

/*
2) Є масив котрий характеризує правила.
   Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
   При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
   Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
*/

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
// let header = document.createElement('div');
// header.id = 'cat';
// document.body.appendChild(header);
// let h = document.createElement('h1');
// h.innerText ='Правила бойцовского клуба';
// document.body.appendChild(h);
// let wrap = document.createElement('div');
// wrap.id = 'wrap';
// document.body.appendChild(wrap);
// for (let i = 0; i < rules.length; i++) {
//     let div1 = document.createElement('div');
//     wrap.appendChild(div1);
//     div1.classList =` rulea rule${i+1}`;
//     let h2 = document.createElement('h2');
//     div1.appendChild(h2);
//     h2.innerText = `${rules[i].title}`;
//     let p = document.createElement('p');
//     div1.appendChild(p);
//     p.innerText = `${rules[i].body}`
// }

/*- Дано 2 масиви з рівною кількістю об'єктів */
/*З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Example:*/

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status:   false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let usersWithCities = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId[i].id===citiesWithId[j].user_id){
//             usersWithId[i].adress = citiesWithId[j];
//             usersWithCities.push(usersWithId[i])
//         }
//     }
// }
// console.log(usersWithCities);


