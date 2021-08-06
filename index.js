var food = [{
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

renderTable(food);

handleAddRow((newFood) => {
  food.push(newFood);
  renderTable(food);
  console.log(food);
});

handleDeleteRow((rowNumber) => {
    const newFood = [...food];
    newFood.splice(rowNumber - 1, 1);
    food = newFood;
    // console.log('rowNumber = ', rowNumber, food);
    renderTable(food);
});