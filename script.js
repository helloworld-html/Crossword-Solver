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
  const index = [...cells].indexOf(x);
  x.maxLength = 1;
  x.type = 'text';
  x.onkeyup = function() {
    if (this.value != '' && cells[index + 1]) {
      cells[index + 1].focus();
    }
  }
}
