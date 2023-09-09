const handleDeleteRow = function (deleteRowAndRerender) {
    document.addEventListener('click', (event) => {
        const {target} = event;
        if (!target || target.tagName !== 'BUTTON') {
            return;
        }
        if (target.getAttribute(ATTRIBUTES.ACTION) !== FOOD_ACTIONS.DELETE) {
            return;
        }
        const rowNumber = target.getAttribute(ATTRIBUTES.ROW_NUMBER);
        deleteRowAndRerender(rowNumber);
    });
};

const handleAddRow = function (addFoodAndRerender) {
    function addRow() {
        const inputs = document.querySelector('.' + CLASSES.INPUT_ROW).querySelectorAll('input');
        const newFood = {};
        inputs.forEach(input => {
            newFood[input.name] = input.value;
        });
        addFoodAndRerender(newFood);
    }

    document.addEventListener('click', (event) => {
        const {target} = event;
        if (!target || target.tagName !== 'BUTTON') {
            return;
        }
        if (target.getAttribute(ATTRIBUTES.ACTION) !== FOOD_ACTIONS.ADD) {
            return;
        }
        addRow();
    });
};
