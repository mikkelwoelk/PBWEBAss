'use strict'
let userInput = prompt('Please enter a number in fahrenheit', 'Enter here');

const addVat = () => {
    let addResult = userInput * 1.25;
    console.log('The price plus Vat is: ' + addResult);
}

addVat();

const subVat = () => {
    let subResult = userInput * 0.75;
    console.log('The price ex Vat is: ' + subResult);
}

subVat();

const justVat = () => {
    let vatResult = userInput * 0.25;
    console.log('The Vat is: ' + vatResult);
}

justVat();
