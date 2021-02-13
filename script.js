'use strict'

let table = document.querySelector('table')

document.querySelector('header>button').addEventListener('click', function() {
  document.querySelector('header').style.animation = 'slide 1s forwards';
  this.style.display = "none";
  document.querySelector('header>div').style.backgroundColor = 'rgba(255, 255, 255, 0)';
})

function addCell() {
  let row = table.insertRow();
  let cell1 = row.insertCell();
  cell1.innerHTML = "A";
}
