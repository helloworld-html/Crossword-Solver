'use strict'

let table = document.querySelector('table');
let cells = document.querySelectorAll('td > input');

document.querySelector('header > button').addEventListener('click', function() {
  document.querySelector('header').style.animation = 'slide 1s forwards';
  this.style.display = "none";
  document.querySelector('header > div').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  document.querySelector('main').style.display = 'block'
})

for (let x of cells) {
  x.maxLength = 1;
}
