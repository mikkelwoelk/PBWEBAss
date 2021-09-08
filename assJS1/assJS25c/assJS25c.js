'use strict';
console.log('Truth table for conjunction');
console.log('var1\tvar2\tvar1 && var2');
let var1 = true;
let var2 = true;
let result = true;
console.log(var1 + '\t' + var2 + '\t' + result);

var1 = true;
var2 = false;
result = false;
console.log(var1 + '\t' + var2 + '\t' + result);

var1 = false;
var2 = true;
result = false;
console.log(var1 + '\t' + var2 + '\t' + result);

var1 = false;
var2 = false;
result = false;
console.log(var1 + '\t' + var2 + '\t' + result);
