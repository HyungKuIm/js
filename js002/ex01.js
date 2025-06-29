// 로또 발생!
"use strict";
let lottoSet = new Set();

console.log(lottoSet.size);

// min - max 사이의 난수 발생
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

while (lottoSet.size < 6) {
    let number = getRandomIntInclusive(1, 45);
    lottoSet.add(number);
}

const sortedArray = [...lottoSet].sort((a, b) => a - b);

// 로또 출력!
sortedArray.forEach(function(val) {
    console.log(val);
    
})