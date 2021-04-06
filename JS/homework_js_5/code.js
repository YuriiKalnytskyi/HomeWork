/*-  Створити функцію конструктор і клас для об'єкту який описує теги
Властивості
 -назва тегу
 - опис його дій
 - масив з атрибутами (2-3 атрибути максимум)
 Кожен атрибут описати як окремий який буде містити
 -назву атрибуту
 -опис дії атрибуту
 інформацію брати з htmlbook.ru */


// function Teg(name, description, attributes) {
//     this.name = name;
//     this.description = description;
//     this.attributes = attributes;
// }
//
// let tegA = new Teg('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. '
//     , [{name: 'accesskey', description: 'Активация ссылки с помощью комбинации клавиш'},
//         {name: 'coords', description: 'Устанавливает координаты активной области'},
//         {name: 'download', description: 'Предлагает скачать указанный по ссылке файл'}]);
// console.log(tegA);
//
// let tegDiv = new Teg('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     [{name: 'align', description: 'Задает выравнивание содержимого тега <div>'}],
//     [{name: 'title', description: 'Добавляет всплывающую подсказку к содержимому.'}],);
// console.log(tegDiv);
//
// let tegH = new Teg('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. ',
//     [{name: 'align', description: 'Определяет выравнивание заголовка.'}]);
// console.log(tegH);
//
// let tegSpan = new Teg('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>',
//     [{name: 'accesskey', description: `Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.`},
//         {name: 'class', description: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//         {name: 'contenteditable', description: 'Сообщает, что элемент доступен для редактирования пользователем. ' },]);
//
// console.log(tegSpan);
//
// let tegInput = new Teg('input ', 'Тег <input> является одним из разносторонних элементов формы и позволяет ' +
//     'создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     [{name: 'accept', description: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//         {name: 'accesskey', description: 'Переход к элементу с помощью комбинации клавиш.'},
//         {name: 'align', description: 'Определяет выравнивание изображения.'},]);
// console.log(tegInput);
//
//
// let tegForm = new Teg('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для' +
//     ' обмена данными между пользователем и сервером. ',
//     [{name: 'accept-charset', description: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
//         {name: 'action', description: 'Адрес программы или документа, который обрабатывает данные формы.'},
//         {name: 'autocomplete', description: 'Включает автозаполнение полей формы.'},]);
// console.log(tegForm);
//
// let tegOption = new Teg('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
//     [{name: 'disabled ', description: 'Заблокировать для доступа элемент списка.'},
//         {name: 'label', description: 'Указание метки пункта списка.'},
//         {name: 'selected ', description: 'Заранее устанавливает определенный пункт списка выделенным.'},]);
// console.log(tegOption);
//
//
// let tegSelect = new Teg('select', 'Тег <select> позволяет создать элемент интерфейса в виде ' +
//     'раскрывающегося списка, а также список с одним или множественным выбором, как показано далее',
//     [{name: 'accesskey', description: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.    '},
//         {name: 'autofocus', description: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//         {name: 'disabled', description: 'Блокирует доступ и изменение элемента.'},]);
// console.log(tegSelect);

//  class Teg1 {
//      constructor(name, description, attributes) {
//          this.name = name;
//          this.description = description;
//          this.attributes = attributes;
//      }
//  }
// let tegA1 = new Teg1('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. '
//     , [{name: 'accesskey', description: 'Активация ссылки с помощью комбинации клавиш'},
//         {name: 'coords', description: 'Устанавливает координаты активной области'},
//         {name: 'download', description: 'Предлагает скачать указанный по ссылке файл'}]);
// console.log(tegA1);
//
// let tegDiv1 = new Teg1('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     [{name: 'align', description: 'Задает выравнивание содержимого тега <div>'}],
//     [{name: 'title', description: 'Добавляет всплывающую подсказку к содержимому.'}],);
// console.log(tegDiv1);

/*-- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car */

// let car = {
//     model : 'Z4' ,
//     producer : 'BMV' ,
//     year : 2005 ,
//     maxSpeed: 220 ,
//     volume : 2.2
// }
// function drive (object){
//     console.log(`їдемо зі швидкістю ${object.maxSpeed} на годину`)
// }
// function  info (object){
//     console.log(object);
// }
// function increaseMaxSpeed (object,newSpeed){
//         object.maxSpeed += newSpeed ;
// }
// function changeYear (object , newValue){
//     object.year = newValue
// }
// function addDriver ( object ,driver){
//         object.driver = driver;
// }
// drive(car);
// info(car);
// increaseMaxSpeed(car,150)
// info(car);
// changeYear(car ,2000)
// info(car);
// addDriver(car,'Yura' )
// info(car);

/*- Створити функцію конструктор і Клас яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
 максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car */

// function Car (model , producer , year, maxSpeed, volume){
//     this.model =model ;
//     this.producer =producer ;
//     this.year = year ;
//     this.maxSpeed =maxSpeed ;
//     this.volume =volume ;
// }
// function  drive ( car ,Speed){
//     console.log(`їдемо зі швидкістю ${Speed}  на годину`);
// }
// function info (car ){
//     console.log(car.model ,car.producer , car.year,car.maxSpeed,car.volume);
// }
// function increaseMaxSpeed (car,newSpeed) {
//     car.maxSpeed += newSpeed ;
//     console.log(`їдемо зі швидкістю ${car.maxSpeed}  на годину`);
//
// }
// function changeYear (car,newValue) {
//     car.year = newValue ;
// }
// function addDriver ( car,driver) {
//     car.driver = driver;
//    console.log(`${car.driver}`)
// }
// let car = new Car('Z4','BMV',2005, 220, 2.2);
// drive(car, 160);
// info(car);
// increaseMaxSpeed(car ,200);
// info(car);
// changeYear(car, 2015);
// info(car);
// addDriver(car,'Yura');

// class Car {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         // console.log(Car.model, Car.producer, Car.year, Car.maxSpeed, Car.volume);
//         console.log(this.model, this.producer, this.year, this.maxSpeed, this.volume);
//     }
//     increaseMaxSpeed(Car, newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}  на годину`);
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver( driver) {
//         Car.drive = driver
//         console.log(`${Car.drive}`)
//
//     }
// }
//
// let car = new Car('Z4', 'BMV', 2005, 220, 2.2);
// car.drive(Car);
// car.info(Car);
// car.increaseMaxSpeed(Car, 100);
// car.info(Car);
// car.changeYear(2020);
// car.info(Car);
// car.addDriver( 'Yura');


/*-створити класс попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
*/

// class Girl {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
//  class Prince {
//      constructor(name, year, tufelka) {
//          this.name = name;
//          this.year = year;
//          this.tufelka = tufelka;
//      }
//  }
// let newArr = [];
// let girl = new Girl('girl', 20 , 40);
// newArr.push(girl)
// let girl1 = new Girl('girl_1', 20 , 38);
// newArr.push(girl1)
// let girl2= new Girl('girl_2', 20 , 37);
// newArr.push(girl2)
// let girl3 = new Girl('girl_3', 20 , 41);
// newArr.push(girl3)
// let girl4 = new Girl('girl_4', 20 , 39);
// newArr.push(girl4)
// let girl5 = new Girl('girl_5', 20 , 35);
// newArr.push(girl5)
// let girl6 = new Girl('girl_6', 20 , 37);
// newArr.push(girl6)
// let girl7 = new Girl('girl_7', 20 , 38);
// newArr.push(girl7)
// let girl8 = new Girl('girl_8', 20 , 40);
// newArr.push(girl8)
// let girl9 = new Girl('girl_9', 20 , 36);
// newArr.push(girl9)
//
// let prince = new Prince('slavic', 19 ,36)
//
// function  search (newArr) {
//     for (let girlElement of newArr) {
//         if (girlElement.size === prince.tufelka) {
//             console.log(`Принц знайшов туфельку принцеси ${girlElement.name}`)
//         }
//     }
// }
// search(newArr);

/*-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить*/

// function Girl (name ,age ,size){
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
// let newArr = [];
//
// let girl = new Girl('girl', 20 , 40);
// newArr.push(girl)
// let girl1 = new Girl('girl_1', 20 , 38);
// newArr.push(girl1)
// let girl2= new Girl('girl_2', 20 , 37);
// newArr.push(girl2)
// let girl3 = new Girl('girl_3', 20 , 41);
// newArr.push(girl3)
// let girl4 = new Girl('girl_4', 20 , 39);
// newArr.push(girl4)
// let girl5 = new Girl('girl_5', 20 , 35);
// newArr.push(girl5)
// let girl6 = new Girl('girl_6', 20 , 37);
// newArr.push(girl6)
// let girl7 = new Girl('girl_7', 20 , 38);
// newArr.push(girl7)
// let girl8 = new Girl('girl_8', 20 , 40);
// newArr.push(girl8)
// let girl9 = new Girl('girl_9', 20 , 36);
// newArr.push(girl9)
//
// function Prince(name,year,tufelka){
//     this.name=name;
//     this.year=year;
//     this.tufelka=tufelka;
//     this.search = function  (newArr){
//         for (let girlElement of newArr) {
//             if ( girlElement.size=== this.tufelka){
//                 console.log(`Принц знайшов туфельку принцеси ${girlElement.name}`)
//             }
//         }
//     }
// }
//
//
// let prince = new Prince ('ivan', 22 ,38 );
// prince.search(newArr);