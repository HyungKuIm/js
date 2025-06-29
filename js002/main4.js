//weakset

"use strict";

// let carWeakSet = new WeakSet();

// let car1 = {
//     make: 'Honda',
//     model: 'Civic'
// }

// carWeakSet.add(car1);

// let car2 = {
//     make: 'Toyota',
//     model: 'Camry'
// }

// carWeakSet.add(car2);

// console.log(carWeakSet);
// console.log(carWeakSet.has(car1));

let carWeakMap = new WeakMap();

let key1 = {
    id: 1
}

let car1 = {
    make: 'Honda',
    model: 'Civic'
}

let key2 = {
    id: 2
}

let car2 = {
    make: 'Toyota',
    model: 'Camry'
}

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);

console.log(carWeakMap);
console.log(carWeakMap.get(key1));




