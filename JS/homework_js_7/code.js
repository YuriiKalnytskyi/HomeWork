/*- Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text". */

// const div=document.createElement("div");
// document.body.append(div);
// div.style.height='100px';
// div.style.width='100px';
// div.style.backgroundColor='green';
// div.setAttribute("id","text");
//
// const button=document.createElement("button");
// button.setAttribute("button","click");
// button.innerText = 'Click'
// document.body.append(button);
// button.onclick=(ev)=>{
//     ev.preventDefault();
//     div.style.display="none"
// }
// /*   другий варіант  */
// const p = document.createElement("p");
// document.body.appendChild(p);
// p.setAttribute('id','text');
// p.innerText ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, sit?' ;
// p.onclick=(ev)=>{
//     ev.preventDefault()
//     p.style.display="none"
// }

/*- Створіть кнопку, при кліку на яку, вона буде приховувати сама себе. */

// const button=document.createElement("button");
// button.setAttribute("button","click");
// button.innerText = 'Click'
// document.body.append(button);
// button.onclick=(ev)=>{
//     ev.preventDefault();
//     button.style.display="none"
// }

/*- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
 При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача*/

// const input=document.createElement("input");
// input.setAttribute("type","text");
// document.body.append(input);
//
// const button=document.createElement("button");
// button.setAttribute("button","click");
// button.innerText = 'Перевірка'
// document.body.append(button);
//
// button.onclick=()=>{
//     if(input.value<18){
//         alert("вік менше за 18")
//     }else alert("можна дорослі сайти")
//     console.log(input.value);
// }
/*- Створіть меню, яке розгортається/згортається при клику */
// let menu= document.getElementById(' menu')
// const but=document.createElement("button");
// but.innerText = "скрити";
// document.body.append(but);
// let  a = true ;
// but.onclick = () => {
//     menu.style.display = a ? 'none': 'block';
//     a=!a ;
//     // menu.hidden = !menu.hidden /* це побачив на розборі дз*/
// }


/*- Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    Вивести список коментарів в документ, кожний в своєму блоці.
    Додайте кожному коментарю по кнопці для згортання його body.*/
//
// let arr = [
//     {title : 'lorem', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, magnam!'},
//     {title : 'lorem1', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, magnam!'},
//     {title : 'lorem2', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, magnam!'}
// ];
// for (let arrElen of arr){
//     const div=document.createElement("div");
//     document.body.append(div);
//     const h = document.createElement('h3')
//     div.appendChild(h);
//     h.innerText = arrElen.title
//     const p = document.createElement('p')
//     div.appendChild(p);
//     p.innerText = arrElen.body
//
//     const but=document.createElement("button");
//     but.innerText="скрити";
//     document.body.append(but);
//     but.onclick=()=>{
//         // p.style.display='none'
//
//         p.hidden = !p.hidden
//
//     }
// }

/*- Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
    Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
    Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.*/


// const but=document.createElement("button");
// document.body.append(but);
// but.innerText="считати дані";
// but.onclick=()=>{
//     const forms=document.forms;
//     for (let form of forms) {
//         console.log(form);
//         for (let formElement of form) {
//             console.log(formElement.value);
//         }
//     }
//}

/*- Створити функцію, яка генерує таблицю.
    Перший аргумент визначає кількість строк.
    Другий параметр визначає кількість ячейок в кожній строці.
    Третій параметр визначає елемент в який потрібно таблицю додати.*/


// function table(line, column, tag) {
//     let table = document.createElement("table");
//     for (let i = 0; i < line; i++) {
//         let tr = document.createElement("tr");
//         table.appendChild(tr);
//         for (let j = 0; j < column; j++) {
//             let th = document.createElement("th");
//             th.innerText = "hello";
//             tr.appendChild(th);
//         }
//     }
//     let tagName = document.createElement(tag);
//     document.body.append(tagName);
//     tagName.appendChild(table);
// }
//
// table(3, 2, 'div')


/*                                          РОБОТА В АУДИТОРІЇ                                    */