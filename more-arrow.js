//single parameter or no parameter

const difference = (m, n) => m - n;
const multiply = (first, second, third) => first * second * third;

const getAge = (person) => person.age;
const student = {
    name: 'Kabir Khan',
    class: 10,
    roll: 3,
    isAttentive: true,
    age: 15,
}
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[3];
const third = getThird([5, 8, 3, 54, 38]);
console.log(third);


const doubleIt = num => num * 2;
const result = doubleIt(5);
console.log(result);


//no parameter
const getPI = () => Math.PI;
console.log(getPI());

//large arrow function:
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = multiply / sum;
    return result;
}

const task = doMath(2, 4, 6);
console.log(task);