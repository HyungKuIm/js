"use strict";
// {
//     age = 4;
//     console.log(age);
    
// }

// default params & spread operator
// function greet(greeting = 'Hello World') {
//     console.log(greeting);
    
// }

// greet();

let kbo = ['기아', 'LG', 'Kium', 'Lotte'];

function test(team1, team2, team3, team4) {
    
    console.log("My Favorite team is " + team1);
    console.log("My Favorite team is " + team2);
    console.log("My Favorite team is " + team3);
    console.log("My Favorite team is " + team4);
    // console.log("My Favorite team is " + team1);
    
}

// test(kbo);
// test.apply(null, kbo);
test(...kbo);