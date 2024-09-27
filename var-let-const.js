//var: no reason to use var
//let: allow it to reassign
//const: do not allow it to reassign

const money = 50;
// money = 50; wrong (const variable e eivabe man add kora jai na){tai let use korte hobe}

const rich = money + 60; 
console.log(rich);


//reassign korar jonno let use krte hobe
let count = 0;
count = count + 20;
console.log(count);


//const diye notun array declare kora jai na 
const numbers = [23, 32, 57, 37, 60];
//numbers = [45, 50, 38, 17];

//but array te index diye value add/remove kora jai

numbers[1] = 45;
numbers.push(5, 3,8);

//ettee notun array create na hoye value add hobe

console.log(numbers);

// const diye object er value add kora jai na
const student = {
    name: 'roksana akter',
    class: 12,
}

// student = {name: 'parvin akter'}  wrong hocche

student.name = 'parvin akter'; //tobe change kora jai

console.log(student);

//loop
let sum = 0;
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(sum);
