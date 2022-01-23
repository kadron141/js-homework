"use strict"
// 300$

const MIN_IN_HOUR = 60;
const SUBSEQUENT_HALF_HOUR = 10;
const FIRST_HOUR_COST = 30;
const FREE_INTERVAL = 5;
const ORDER = 70;

if (ORDER <= MIN_IN_HOUR) {
    console.log(FIRST_HOUR_COST + '$');
} else {
    let result = FIRST_HOUR_COST;
    let leftTime = ORDER - MIN_IN_HOUR;
    const halfsLeft = parseInt(leftTime / MIN_IN_HOUR / 2); 

    result += halfsLeft * SUBSEQUENT_HALF_HOUR;
    leftTime -= halfsLeft * MIN_IN_HOUR / 2;

    if (leftTime <= FREE_INTERVAL) {
        console.log(result + '$');
    } else {
        console.log(result + SUBSEQUENT_HALF_HOUR + '$');
    }

    
}