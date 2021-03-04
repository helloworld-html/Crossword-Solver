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

function GenerateTable(numberColumns, numberRows) {
  for (let column = 0; column < numberColumns; column++) {
    let newRow = table.insertRow();
    for (let row = 0; row < numberRows; row++) {
      let inputCell = document.createElement('INPUT');
      inputCell.maxLength = 1;
      inputCell.type = 'text';
      newRow.insertCell().appendChild(inputCell);
    }
  }
}

GenerateTable(5, 5)

function ApplyTableChanges() {
  table.innerHTML = '';
  let valueColumns = document.getElementById('columns').value;
  let valueRows = document.getElementById('rows').value;
  GenerateTable(valueColumns, valueRows);
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
