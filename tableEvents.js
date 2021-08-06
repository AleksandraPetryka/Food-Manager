var handleDeleteRow = function(deleteRowAndRerender) {
    document.addEventListener('click', (event) => {
        const { target } = event;
        if (!target || target.tagName !== 'BUTTON') {
            return;
        }
        if (target.getAttribute('data-action') !== 'DELETE') {
            return;
        }
        const rowNumber = target.getAttribute('data-row-number');
        deleteRowAndRerender(rowNumber);
    });
}

var handleAddRow = function(addFoodAndRerender) {
    function addRow() {
        const inputs = document.querySelector('.input-row').querySelectorAll('input');
        const newFood = {};
        inputs.forEach(input => {
            newFood[input.name] = input.value;
        });
        addFoodAndRerender(newFood);
    };

    document.addEventListener('click', (event) =>  {
        const { target } = event;
        if (!target || target.tagName !== 'BUTTON') {
            return;
        }
        if (target.getAttribute('data-action') !== 'ADD') {
            return;
        }
        addRow();
    });
}
