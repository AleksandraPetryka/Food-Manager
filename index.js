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

var FOOD_PROPERTIES = {
    NAME: 'name',
    CATEGORY: 'category',
    DATE: 'date',
};

var FOOD_PROPERTIES_LIST = [
    FOOD_PROPERTIES.NAME, 
    FOOD_PROPERTIES.CATEGORY, 
    FOOD_PROPERTIES.DATE
];

renderTable(food);

handleAddRow((newFood) => {
  food.push(newFood);
  renderTable(food);
});