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

// metody do użycia:
// const div = document.createElement('div');
// element.classList.add('className');
// element.appendChild(element2);
// document.querySelector('#table-root');

function createCell(text) {
    const cell = document.createElement('td');
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
    // table.appendChild();
    table.innerHTML = '<th class="cell">\n' +
        '                    Nr\n' +
        '                </th>\n' +
        '                <th class="cell">\n' +
        '                    Name\n' +
        '                </th>\n' +
        '                <th class="cell">\n' +
        '                    Category\n' +
        '                </th>\n' +
        '                <th class="cell">\n' +
        '                    Date\n' +
        '                </th>';
    for ( let i = 0; i < tableData.length; i++) {
        table.appendChild(createRow(i + 1, tableData[i]));
    }
    // console.log('moj wykreatowany element to jest:', table);
    table.classList.add('table');
    return table;
}

function renderTable() {
    const tableRoot = document.querySelector('#table-root');

    tableRoot.appendChild(createTable(food));
}

renderTable();