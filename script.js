'use strict'

let table = document.querySelector('table');
let cells = document.querySelectorAll('td > input');

document.querySelector('header > button').addEventListener('click', function() {
  document.querySelector('header').style.animation = 'slide 1s forwards';
  this.style.display = "none";
  document.querySelector('header > div').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  document.querySelector('main').style.display = 'block'
})

let countId = 1;
for (let x of cells) {
  x.maxLength = 1;
  x.id = 'input' + countId++;
  x.type = 'text';
  x.onkeyup = function() {
    if (this.value != '') { alert("hi") }
  }
  console.log(x)
}
