"use strict";

function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr) {
    // let that = this;
    return arr.map((x)  => {
        console.log(this.prefix + x);
        
    });
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad', 'Jeff']);