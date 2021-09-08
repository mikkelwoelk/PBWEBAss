'use strict';
console.log('Truth table for conjunction');
console.log('var1\tvar2\tvar3\tvar1 && var2 && var3');
let var1 = true;
let var2 = true;
let var3 = true;
let result = true;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + result);

var1 = true;
var2 = true;
var3 = false;
result = false;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + result);

var1 = true;
var2 = false;
var3 = true;
result = false;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + result);

var1 = true;
var2 = false;
var3 = false;
result = false;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + result);

var1 = false;
var2 = true;
var3 = true;
result = false;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + result);

var1 = false;
var2 = true;
var3 = false;
result = false;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + result);

var1 = false;
var2 = false;
var3 = true;
result = false;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + result);

var1 = false;
var2 = false;
var3 = false;
result = false;
console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + result);
