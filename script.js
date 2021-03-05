'use strict'

let table = document.querySelector('table');
let inputSearch = document.getElementById('inputSearch');

document.querySelector('header > button').addEventListener('click', function() {
  document.querySelector('header').style.animation = 'slide 1s forwards';
  this.style.display = 'none';
  document.querySelector('header > div').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  document.querySelector('main').style.display = 'block'
})


function GenerateTable(x, y) {
  for (let column = 0; column < x; column++) {
    let newRow = table.insertRow();
    for (let row = 0; row < y; row++) {
      let input = document.createElement('INPUT');
      newRow.insertCell().appendChild(input);
    }
  }
  let cells = document.querySelectorAll('td > input');
  for (let x of cells) {
    x.maxLength = 1;
    x.type = 'text';
    const index = [...cells].indexOf(x);
    x.onkeydown = function() {
      if (this.value != '' && cells[index + 1]) {
        cells[index + 1].focus();
      }
    }
  }
}

GenerateTable(5, 5)

function ApplyTableChanges() {
  let valueColumns = document.getElementById('columns').value;
  let valueRows = document.getElementById('rows').value;
  if (valueColumns < 5 || valueRows < 5 || valueRows > 25) {
    alert("Please choose a value between 5 and 20");
    return false
  }
  let confirmChange = confirm("This will automatically delete all table values");
  if (confirmChange == false) {
    document.querySelector('section').style.display = 'none';
    return false
  }
  table.innerHTML = '';
  GenerateTable(valueColumns, valueRows);
  document.querySelector('section').style.display = 'none';
}


inputSearch.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('search').click()
  }
})

function SubmitSearch() {
  for (const row of Object.values(table.rows)) {
    for (const cell in Object.values(row.cells)) {
      const y = cell.firstChild.value;
      console.log(y)
    }
  }
} //YOUR CODE MATTHAIS
