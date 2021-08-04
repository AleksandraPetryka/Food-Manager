function deleteRow() {

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

    const inputButton = document.querySelector('.input-row').querySelector('button');
    inputButton.addEventListener('click', addRow);
}
