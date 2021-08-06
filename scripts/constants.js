var FOOD_PROPERTIES = {
    NAME: 'name',
    CATEGORY: 'category',
    DATE: 'date',
};

var INPUTS = [{
    name: FOOD_PROPERTIES.NAME,
    type: 'text',
}, {
    name: FOOD_PROPERTIES.CATEGORY,
    type: 'text',
}, {
    name: FOOD_PROPERTIES.DATE,
    type: 'date',
}]

var FOOD_ACTIONS = {
    ADD: 'add',
    DELETE: 'delete',
}

var ATTRIBUTES = {
    ACTION: 'data-action',
    ROW_NUMBER: 'data-row-number',
}

var CLASSES = {
    INPUT_ROW: 'input-row',
}

var STORAGE_KEYS = {
    FOOD: 'food'
}