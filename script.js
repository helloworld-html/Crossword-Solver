'use strict'

document.querySelector('header > button').addEventListener('click', function() {
  document.querySelector('header').style.animation = 'slide 1s forwards';
  this.style.display = 'none';
  document.querySelector('header > div').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  document.querySelector('main').style.display = 'block'
})

const table = document.querySelector('table');

function GenerateTable(x, y) {
  for (let column = 0; column < x; column++) {
    const newRow = table.insertRow();
    for (let row = 0; row < y; row++) {
      newRow.insertCell().appendChild(document.createElement('INPUT'));
    }
  }
  const cells = document.querySelectorAll('td > input');
  for (const x of cells) {
    x.maxLength = 1;
    x.type = 'text';
    const index = [...cells].indexOf(x);
    x.onkeyup = function() {
      if (this.value != '' && cells[index + 1]) {
        cells[index + 1].focus();
      }
    }
  }
}

GenerateTable(5, 5)

document.querySelector('section').addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('submitSettings').click()
  }
})

function ApplyTableChanges() {
  const valueColumns = document.getElementById('columns').value;
  const valueRows = document.getElementById('rows').value;
  if (valueColumns < 5 || valueRows < 5 || valueRows > 25) {
    alert("Please choose a value between 5 and 20");
    return false
  }
  const confirmChange = confirm("This will automatically delete all table values");
  if (confirmChange == false) {
    document.querySelector('section').style.display = 'none';
    return false
  }
  table.innerHTML = '';
  GenerateTable(valueColumns, valueRows);
  document.querySelector('section').style.display = 'none';
}


const input = document.getElementById('inputSearch');

input.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('search').click()
  }
})

function SubmitSearch() {
  if (input.value == "" || /^\s+$/.test(input.value)) {
    alert('Please enter a value');
    return false
  }

  //Find Rows
  const arrayX = [];
  for (const row of table.rows) {
    for (const cell of row.cells) {
      const valueCell = cell.firstChild.value.toLowerCase();
      arrayX.push(valueCell)
    }
  }
  const values = chunkArray(arrayX, table.rows[0].cells.length);
  const valuesX = values.map(x => x.join(''));
  const foundX = valuesX.find(element => element.includes(input.value.toLowerCase()));

  //Find Columns
  let arrayY = [];
  for (let a = 0; a < values.length; a++) {
    for (let b in values) {
      arrayY.push(values[b][a]);
    }
  }
  let valuesY = chunkArray(arrayY, table.rows[0].cells.length);
  valuesY = valuesY.map(x => x.join(''));
  const foundY = valuesY.find(element => element.includes(input.value.toLowerCase()));

  if (foundX || foundY) {
    document.querySelector('p').innerHTML = 'Word found!'
  } else {
    document.querySelector('p').innerHTML = 'Word not found'
  }
}

function chunkArray(x, chunk) {
  const a = [];
  while (x.length) {
    a.push(x.splice(0, chunk));
  }
  return a;
}
