var renderTable = function(food) {
    function createCell(text) {
        const cell = document.createElement('td');
        cell.classList.add('cell');
        cell.innerText = text;
        return cell;
    }

    function createButton({text, label, number, action}) {
        const button = document.createElement('button');
        button.classList.add('cell', 'button');
        button.innerText = text;

        button.setAttribute('aria-label', label);
        button.setAttribute(ATTRIBUTES.ROW_NUMBER, number);
        button.setAttribute(ATTRIBUTES.ACTION, action);
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
        row.appendChild(createButton({
            text: '✖',
            label: 'Delete row',
            number: nr,
            action: FOOD_ACTIONS.DELETE,
        }));
        return row;
    }

    function createInputRow(nr) {
        const row = document.createElement('tr');
        row.classList.add('table-row');
        row.classList.add(CLASSES.INPUT_ROW);
        row.appendChild(createCell(nr));
        INPUTS.forEach(property => {
            row.appendChild(createInput(property.name, property.type));
        });
        row.appendChild(createButton({
            text: '✓',
            label: 'Add row',
            number: nr,
            action: FOOD_ACTIONS.ADD,
        }));
        return row;
    }

    function createInput(name, type) {
        const input = document.createElement('input');
        input.setAttribute('name', name);
        input.setAttribute('type', type);
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

        for (let i = 0; i < tableData.length; i++) {
            table.appendChild(createRow(i + 1, tableData[i]));
        }
        table.classList.add('table');
        table.appendChild(createInputRow(tableData.length + 1));
        return table;
    }

    const tableRoot = document.querySelector('#table-root');
    tableRoot.innerHTML = '';
    tableRoot.appendChild(createTable(food));
};