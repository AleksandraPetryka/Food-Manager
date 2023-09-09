const getFood = function () {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.FOOD)) || [];
};

const setFood = function (food) {
    return localStorage.setItem(STORAGE_KEYS.FOOD, JSON.stringify(food));
};