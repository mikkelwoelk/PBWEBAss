'use strict'
/* Faculty functions */
const fact = (n) => {
    if (n === 0){                              // Checks if the input is strictly equal to 0
        return 1;                              // If it is, then it returns 1
    }
    return n * fact(n-1);                      // If not, then it returns the input times the function with the input parameter and subtracts 1 from the parameter until it's 0
};

console.log(fact(5));                          // Answer should be 120

/* Faculty function using a tenary function */
const factShort = (n) => {
    return n<=1? 1 : factShort(n-1)*n;         // Tenary shorthand for the same function
}

console.log(factShort(5));




/* Fabonacci functions */
const fibo = (n) => {
    if (n < 2)                                 // Checks if the input is less than 2
    return n;                                  // If it is, then it returns the inputtet number
    
    let a = 0, b = 1, c = 1;                   // Declaring variables for calculation

    while (--n > 1) {                          // If the decrementet input number is larger than one, do this:
        a = b;                                 // Sets the value of a to the same as b
        b = c;                                 // Sets the value of b to the same as c
        c = a + b;                             // Calculates the result of a + b
    }

    return c;                                  // Returns the result of c
}

/* Fabinacci function using a tenary function */
const fiboShort = (n) => {
    return n > 1 ? fiboShort(n-1, b, a+b) : a; // Tenary shorthand for the same function
}



/* Powers function */
const pow = (x, n) => {
    if (n == 1) {                               // Checks if the input is equal to the second input
      return x;                                 // If it is, then it returns the first input
    } else {
      return x * pow(x, n - 1);                 // If not, then it returns the first input times the function with the input parameters and subtracts 1 from the parameter until it's 0
    }
  }
  
  console.log(pow(2, 3));                       // 8
