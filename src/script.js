document.getElementsByClassName('container')
document.getElementsByTagName('div')



const sidebar = document.querySelector('.sidebar')

const menu = document.querySelector('.burger-menu__line')

const newLinkContainer = document.createElement('div')
newLinkContainer.className = 'link-container'

const newLink = document.createElement('a')
newLink.textContent = 'link'

sidebar.textContent = 'sidebar' 
newLinkContainer.append(newLink)
sidebar.prepend(newLinkContainer)
//sidebar.innerHTML = '<div>innerHTML</div>';
//sidebar.outerHTML = '<a>outerHTML</a>'
sidebar.textContent = '<span>textContent</span>'


const offcanvas = document.querySelector('.offcanvas')

let numMargin = 0;

setInterval(()=> {
  numMargin = numMargin + 1;
  newLinkContainer.style.marginLeft = `${numMargin}px`
}, 1000 )

const close = document.querySelector('.close')

/*console.log(close)

let num = 7
console.log(num)
let num2 = num;
num2 =9
console.log(num)
console.log(num2)



let item;
console.log(item)*/
/* 
типы данных
притимитвные
string
number
bigINT
undefined
Symbol
boolean = flase true
------
null
----
objects
*/

/*let obj1 = { some: 1 } // адресс1
console.log(obj1.some)
let obj2 = JSON.parse(JSON.stringify(obj1)) // adrees2
obj2.some = 3
console.log(obj1.some)
console.log(obj1 === obj2);*/



menu.addEventListener('click', function (event) {
  var active = 'active';
  offcanvas.classList.toggle(active)
  menu.classList.toggle(active)
})

// ОПЕРАТОРЫ  
// Математические + - * / % **
let username = 'Иван'
let surname = 'Иванов'
let middleName = 'Иванович'
let fullName = surname + ' ' + username + ' ' + middleName 
let fullNameInt = `${surname} ${username} ${middleName}`
let another = "jklj"
// console.log(2,fullNameInt)
sidebar.innerHTML = fullNameInt

// логические
// || - или
// && - и
// сравнение
// a > b  b < a a >= b <=  == ===
/*let a = 1;
let b = 2

if (a > b && a === 1) {
  console.log('Да')
} else if (a === 3){
  console.log('a === 1')
} else if (b === 3){
  console.log('b === 2')
}  else {
  console.log('нет')
}
*/
let step = 1;

switch (step) {
  case 1: {
    console.log('step 1')
    break;
  }
  case 2:
    console.log('step 2')
    break;
  default:
    console.log('other step')
    break;
}

const elements = document.querySelectorAll('a')



function createElement (tag, className, content) {
  const element = document.createElement(tag)
  element.className = className
  element.textContent = content
  return element;
}

function add(a, b) {
  return a + b;
}


let element1 = createElement('div', 'class 1', 'content 1')
let element2 = createElement('a', 'class 2', 'content 2')
let element3 = createElement('span', 'class 3', 'content 3')

/*sidebar.append(element1)
sidebar.append(element2)
sidebar.append(element3)*/

const elementsArray = [element1, element2, element3];

for (let i = 0; i < elementsArray.length; i++) {
  const element = elementsArray[i];
  sidebar.append(element)
}





const array = ['apple', 'orange', 'banana', 'pineapple']

let index = 0;

while(index < array.length) {
  if (array[index] === 'orange') {
    break
  }
  console.log('while', array[index])
  index += 1;
}

do {
  console.log('do')
} while(false)

for (let index = 0; index < array.length; index++) {
  if(array[index] === 'orange') {
    continue
  }
  console.log('for',array[index]);
}








