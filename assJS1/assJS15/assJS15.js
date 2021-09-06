'use strict'

const initConversion = () => {
    let userInput = prompt('Please enter a number in fahrenheit', 'Enter here');
    let result = 5/9*(userInput-32);
    console.log('Converted to celsius: ' + result);
}

window.addEventListener('load', initConversion);