//ordinary way(without using template string)
const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);


//using backtick (with using template string)
const math =
    `
The sum of ${a} and ${b} is ${a + b}
`
console.log(math);

//ordinary way (without using template string)
const introduce = 'Hi, Smith! \n' +
    'How are you? \n' +
    'Hope you are well.';
console.log(introduce);


//using backtick (with using template string)
const introduce2 = `Hi, Smith!
How are you?
Hope you are well.`;
console.log(introduce2);


//explore the super power of backtick(``)
const student = {
    name: 'Andrew Doland',
    id: 202402006,
    age: 5,
    class: 9,
}
const marks = [78, 90, 84, 87, 96, 83];

const check = `The final result of ${student.name} is ${marks}`;
console.log(check);

const check2 = `${student.name}, the student of class ${student.class} get the mark of Math is ${marks[2]}.`;
console.log(check2);

