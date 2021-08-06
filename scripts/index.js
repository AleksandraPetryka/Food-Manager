let food = getFood();

renderTable(food);

handleAddRow((newFood) => {
    food.push(newFood);
    setFood(food);
    renderTable(food);
});

handleDeleteRow((rowNumber) => {
    const newFood = [...food];
    newFood.splice(rowNumber - 1, 1);
    food = newFood;

    setFood(food);
    renderTable(food);
});
