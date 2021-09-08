'use strict';
const play = function () {
    let x = Math.random();
    x = Math.floor(x * 2 + 1);          // Altering the multiplier number (in this case '2') will alter how many 'sides' it will have to choose from.
    return x;                           // 2 = coinflip | 6 = dice throw | 36 = roulette
}

play();



const f2c = () => {
    let userInput = prompt('Please enter a number in fahrenheit', 'Enter here');
    let resultCel = (userInput-32) * 5/9;
    console.log(userInput + '° fahrenheit in celsius is: ' + resultCel.toFixed(0) + '°');

}

f2c();



const c2f = () => {
    let userInput = prompt('Please enter a number in celsius', 'Enter here');
    let resultFahr = (userInput * 1.8) + 32;
    console.log(userInput + '° celsius in fahrenheit is: ' + resultFahr.toFixed(0) + '°');

}

c2f();
