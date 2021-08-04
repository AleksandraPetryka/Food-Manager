const food = [{
    name: 'mleko',
    category: 'nabiał',
    date: '6.08.2021',
}, {
    name: 'sok',
    category: 'napoje',
    date: '7.08.2021'
}, {
    name: 'spaghetti bolonese',
    category: 'posiłek',
    date: '8.08.2021'
}];

function createCell(text) {
    const cell = document.createElement('td');
    cell.classList.add('cell');
    cell.innerText = text;
    return cell;
}

function createHead(text) {
    const cell = document.createElement('th');
    cell.classList.add('cell');
    cell.innerText = text;
    return cell;
}

function createRow(nr, rowData) {
    const row = document.createElement('tr');
    row.classList.add('table-row');
    [nr, rowData.name, rowData.category, rowData.date].forEach(text => {
        row.appendChild(createCell(text));
    });
    return row;
}

function createTable(tableData) {
    const table = document.createElement('table');
    table.classList.add('table');

    const tableHead = document.createElement('thead');
    tableHead.classList.add('table-head');
    ['Nr', 'Name', 'Category', 'Date'].forEach(text => {
        tableHead.appendChild(createHead(text));
    });
    table.appendChild(tableHead);

    for ( let i = 0; i < tableData.length; i++) {
        table.appendChild(createRow(i + 1, tableData[i]));
    }
    table.classList.add('table');
    return table;
}

function renderTable() {
    const tableRoot = document.querySelector('#table-root');

    tableRoot.appendChild(createTable(food));
}

renderTable();