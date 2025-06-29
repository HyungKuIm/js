"use strict";

let lottoMap = new Map();

console.log(lottoMap.size);

// min - max 사이의 난수 발생
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

let count = 0;
while (lottoMap.size < 6) {
    count++;
    lottoMap.set(`${count}번째 값`, getRandomIntInclusive(1, 45));
}

//로또 출력
lottoMap.forEach(function(val, key) {
    console.log(key, val);
    
})
