var getFood = function() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.FOOD)) || [];
}

var setFood = function(food) {
    return localStorage.setItem(STORAGE_KEYS.FOOD, JSON.stringify(food));
}