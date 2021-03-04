'use strict'

let table = document.querySelector('table');
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
  let valueColumns = document.getElementById('columns').value;
  let valueRows = document.getElementById('rows').value;
  if (valueColumns < 5 || valueColumns > 20 || valueRows < 5 || valueRows > 20) {
    alert("Please choose a value between 5 and 20");
    return false
  }
  table.innerHTML = '';
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
