/*
- Дана textarea.
В неё вводится текст.
Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.*/

// let text = document.getElementById('text');
// text.oninput = () => {
//     localStorage.setItem('text', text.value)
// }
// let x = localStorage.getItem('text');
// text.innerHTML = x;

/*- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
Сделайте ваш скрипт как можно более универсальным.*/
//
// let input = document.getElementById('text');
// input.oninput = () => {
//     localStorage.setItem('text', input.value)
// }
// let input2 = localStorage.getItem('text')
// input.value = input2;
//
// let checkbox = document.getElementById('checkbox');
// checkbox.onclick = () => {
//     localStorage.setItem('checkbox', checkbox.checked)
// }
// let checkbox1 = localStorage.getItem('checkbox');
// checkbox.checked = JSON.parse(checkbox1)
//
// /* НЕ РОБИТЬ ТАК ЯК ТРЕБА
//  ЗАВЖДИ ВИБИРАЄ "woman" */
// let rad = document.getElementsByName('rad') ;
// for (let i = 0; i < rad.length; i++) {
//     rad[i].onclick = ()=>{
//         localStorage.setItem('rad',rad[i].checked)
//         console.log(rad[i].checked);
//     }
//     let rad1= localStorage.getItem('rad')
//     let a= rad[i]
//     console.log(rad[i].checked);
//     a.checked=JSON.parse(rad1)
//
// }
// console.log(rad);
//
// let select = document.getElementById('select');
// select.onclick=()=>{
//     localStorage.setItem('select',select.value)
// }
// let select1 = localStorage.getItem('select');
// select.value = select1;

/*-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
Требование : хранить историю своих изменений (даже после перезагрузки страницы).
Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).*/

// let textarea = document.getElementById('text');
// let sev = document.getElementById('sev');
// let histori = document.getElementById('histori');
// let histori1 = document.getElementById('histori1');
// let arr=[];
// sev.onclick = ()=>{
//     arr.push(textarea.value)
//     localStorage.setItem('text' , JSON.stringify(arr))
// }

/*- Реализуйте записную книгу, хранящую данные в локальном хранилище.
Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
Данные вводить через соответсвующую форму.
--Каждому контакту добавить кнопку для удаления контакта.
--Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые
инпуты для редактирования, которые уже заполнены данными объекта*/

let submit = document.getElementById('submit');

let name = document.getElementById('name');
let name1 = document.getElementById('name1');
let surname = document.getElementById('surname');
let mail = document.getElementById('mail');
let firm = document.getElementById('firm');
let department = document.getElementById('department');
let birthday = document.getElementById('birthday');
let arr = [];

submit.onclick = (ev) => {
    ev.preventDefault()
    let user = {
        name: name.value,
        name1: name1.value,
        surname: surname.value,
        mail: mail.value,
        firm: firm.value,
        department: department.value,
        birthday: birthday.value,
    }
    arr.push(user)
    localStorage.setItem('users', JSON.stringify(arr));

    const users = JSON.parse(localStorage.getItem('users'))

    let div = document.createElement('div')
    document.body.append(div);
    let btn = document.createElement('button')
    let div2 = document.createElement('div')
    btn.innerHTML = 'Видалити юзера '
    users.map((value, index) => {
        value.index = index
        div.appendChild(div2);
        div2.innerText = JSON.stringify(value)
        div2.appendChild(btn)
        div2.setAttribute('id', index)
    })

    btn.onclick = () => {
        div2.innerHTML= '';
        // localStorage.removeItem('users',) // це видаляє повністю весь масив юзерів

        /* наступним кодом я пробував видалитит конкретного юзера аел не получається і
        * І незнаю як зробити */
        // console.log(e);
        // const index = e.path[1].getAttribute('id')
        // console.log(users);
        // const newUser = users.find((value, index1) => index1 !== index);
        // console.log(newUser);
    }
}


let usersData = JSON.parse(localStorage.getItem('users'));
console.log(usersData);





