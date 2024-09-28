const actor = {
    name: 'Ananata',
    age: 38,
    phoneNumber: '01917345678',

}

//object destructuring:

//const phoneNumber = actor.phoneNumber;
//console.log(phoneNumber);

//const age = actor.age;
//console.log(age);

//const name = actor.name;
//console.log(name);

//if right side is an object left side of destructuring will be object as well

//use property name as a variable that contains the property value
//const {age, phoneNumber} = actor;
//console.log(age, phoneNumber);

// const {age:boyos, phoneNumber} = actor;
// console.log(boyos, phoneNumber);

const { age, phoneNumber: mobileNo } = actor;
console.log(age, mobileNo);

//array destructuring:

const numbers = [45, 89];
const [first, second] = numbers;
const [x, y] = [32, 90]



//advance
function doubleThem(a, b) {
    return [a * 3, b * 3];
}
const [prothom, ditiyo] = doubleThem(2, 5);
console.log(prothom, ditiyo);
