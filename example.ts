//implicit type
const example = [1, 2, 3, 4];
//explicit type
const ex2: (number | boolean)[] = [1, 2, 3, 4, true];

//functions
function add(num1: number, num2: number): number{
    return num1 + num2;
}
console.log(add(1, 2));