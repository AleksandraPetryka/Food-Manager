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

const FOOD_PROPERTIES_NUM = 3;

function createCell(text) {
    const cell = document.createElement('td');
    cell.classList.add('cell');
    cell.innerText = text;
    return cell;
}

function createButton(text, label) {
    const button = document.createElement('button');
    button.classList.add('cell', 'button');
    button.innerText = text;
    button.setAttribute('aria-label', label);
    return button;
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
    row.appendChild(createButton('✕', 'Delete row'));
    return row;
}

function createInputRow(nr) {
    const row = document.createElement('tr');
    row.classList.add('table-row');
    row.classList.add('input-row');
    row.appendChild(createCell(nr));
    for (let i = 0; i < FOOD_PROPERTIES_NUM; i++) {
        row.appendChild(createInput());
    }
    row.appendChild(createButton('✓', 'Add row'));
    return row;
}

function createInput() {
    const input = document.createElement('input');
    input.classList.add('input');
    const td = document.createElement('td');
    td.classList.add('cell');
    td.appendChild(input);
    return td;
}


function createTable(tableData) {
    const table = document.createElement('table');
    table.classList.add('table');

    const tableHead = document.createElement('thead');
    tableHead.classList.add('table-head');
    ['Nr', 'Name', 'Category', 'Date', '\u00a0'].forEach(text => {
        tableHead.appendChild(createHead(text));
    });
    table.appendChild(tableHead);

    for ( let i = 0; i < tableData.length; i++) {
        table.appendChild(createRow(i + 1, tableData[i]));
    }
    table.classList.add('table');
    table.appendChild(createInputRow(tableData.length + 1));
    return table;
}

function renderTable() {
    const tableRoot = document.querySelector('#table-root');

    tableRoot.appendChild(createTable(food));
}

renderTable();