const max = Math.max(24, 56, 45, 21, 68, 9);
console.log(max);


const numbers = [34, 5, 32, 3, 72, 23,];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

//use spread operator to copy:
const num1 = [34, 12, 6, 57, 33, 89];
const num2 = num1;
const num3 = [...num1]; //copy
console.log(num3);
num1.push(56);
console.log(num3);
console.log(num1);

//advance:
//const num4 = [...num1, 9999];
const num4 = [...num1];
console.log(num4);