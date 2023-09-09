const FOOD_PROPERTIES = {
    NAME: 'name',
    CATEGORY: 'category',
    DATE: 'date',
};

const INPUTS = [{
    name: FOOD_PROPERTIES.NAME,
    type: 'text',
}, {
    name: FOOD_PROPERTIES.CATEGORY,
    type: 'text',
}, {
    name: FOOD_PROPERTIES.DATE,
    type: 'date',
}];

const FOOD_ACTIONS = {
    ADD: 'add',
    DELETE: 'delete',
};

const ATTRIBUTES = {
    ACTION: 'data-action',
    ROW_NUMBER: 'data-row-number',
};

const CLASSES = {
    INPUT_ROW: 'input-row',
};

const STORAGE_KEYS = {
    FOOD: 'food'
};