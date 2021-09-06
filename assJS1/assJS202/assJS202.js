'use strict'

const initLeapYearCheck = () => {
    let userInput = prompt('Please enter a danish CPR number', 'Enter here');


    if (userInput % 2 == 0){
        console.log('The entered CPR number seems to be a woman.');
    }
    else{
        console.log('The entered CPR number seems to be a man.')
    }
}

window.addEventListener('load', initLeapYearCheck);