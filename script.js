'use strict'

let table = document.querySelector('table');
let cells = document.querySelectorAll('td > input');
let input = document.getElementById('inputSearch');

document.querySelector('header > button').addEventListener('click', function() {
  document.querySelector('header').style.animation = 'slide 1s forwards';
  this.style.display = 'none';
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


function ApplyTableChanges() {
  let checkbox = document.getElementById('reset');
  if (document.getElementById('reset').checked) {
    for (let x of cells) { x.value = '' }
  }
  checkbox.checked = false;
  document.querySelector('section').style.display = 'none';
}

input.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('search').click()
  }
})

function SubmitSearch() {
  alert('test')
}
