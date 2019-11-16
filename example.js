"use strict";
exports.__esModule = true;
var example_enum_1 = require("./example.enum");
//implicit type
var example = [1, 2, 3, 4];
//explicit type
var ex2 = [1, 2, 3, 4, true];
//functions
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
function add2(num1, num2) {
    return num1 + num2;
}
add2(example_enum_1.NumsEnum.Num1, example_enum_1.NumsEnum.Num2);
