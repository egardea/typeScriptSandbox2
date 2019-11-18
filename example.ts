import { NumsEnum } from './example.enum';
import { INumsExample} from './numExample.interface';

//implicit type
const example = [1, 2, 3, 4];

//explicit type
const ex2: (number | boolean)[] = [1, 2, 3, 4, true];

//functions
function add(num1: number, num2: number): number{
    return num1 + num2;
};
console.log(add(1, 2);

function add2(num1: NumsEnum, num2: NumsEnum): number{
    return num1 + num2;
};
add2(NumsEnum.Num1, NumsEnum.Num2);

//define a type
type numExample = {num1: number, num2: number};

function add3(nums: numExample): number{
    return nums.num1 + nums.num2;
};
add3({num1: 1, num2: 2});