"use strict";

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    equals(other) {
        return this.name === other.name && this.age === other.age;
    }
}


// let myArray = [11, 22, 34, 65, 34];
// let mySet = new Set(myArray);

// console.log(mySet);
// mySet.add('100');
// mySet.add({a: 1, b: 2});
// mySet.add({a: 1, b: 2});
// mySet.delete(22);
// mySet.add('100');
// mySet.add('200');

// console.log(mySet.size);

// mySet.forEach(function(val) {
//     console.log(val);
// });


const set = new Set();
const person1 = new Person("John", 25);
const person2 = new Person("John", 25);

set.add(person1);
set.add(person2);

console.log(set.size);
console.log(set.has(person2));

let myMap = new Map([
    ['a1', '손아섭'],
    ['b1', '이대호'],
    ['c1', '박찬호'],
]);

myMap.set('d4', '서장훈');
myMap.delete('a1');
console.log(myMap);
console.log(myMap.size);


myMap.set('c1', '박진만');
console.log(myMap.get('a1'));
console.log(myMap.get('b1'));
console.log(myMap.get('c1'));
// console.log(myMap['a1']);


