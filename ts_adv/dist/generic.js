"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Dmytro' }, { age: 18 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `In this object ${value.length} symbols`
    };
}
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['Ford', 'Audi'];
const ford = {
    model: 'Ford',
    year: 2020
};
//# sourceMappingURL=generic.js.map