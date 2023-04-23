function sumTable() {

  // get the first table element
  let table = document.querySelector('table');

  // get all the rows except the first and last one
  let rows = document.querySelectorAll('tr:not(:first-child):not(:last-child)');
  let sum = 0;

  // loop through each row
  for (let row of rows) {

    // get the value of the last cell
    let cell = row.querySelector('td:last-child');

    // add it to the sum
    sum += Number(cell.innerHTML);
  }

  // display the sum in the element with ID "sum"
  document.getElementById('sum').innerHTML = sum.toFixed(2);
}