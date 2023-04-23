function colorize() {
    let colorizedCellElements = document.querySelectorAll('tr:nth-of-type(even)');

    let arrColorizedElements = Array.from(colorizedCellElements);

    arrColorizedElements.forEach(function(cell) {
        cell.style.backgroundColor = 'Teal';
    });
}