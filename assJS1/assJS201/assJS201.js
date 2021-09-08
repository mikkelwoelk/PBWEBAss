'use strict'

const initLeapYearCheck = () => {
    let userInput = prompt('Please enter a year', 'Enter here');


    if ((userInput % 4 == 0) && (userInput % 400 == 0)){
        console.log('The entered year IS a leap year.');
    }
    else{
        console.log('The entered year is NOT a leap year.')
    }
}

window.addEventListener('load', initLeapYearCheck);
