//function declaration:

// function add(a, b){
//     const result = a + b;
//     return result;
// }
function add(a, b) {
    //const result = a + b;
    return a + b;
}

//function expression:
const add2 = function (a, b) {
    return a + b;
}

//arrow function:
const add3 = (a, b) => a + b;

const sum = add3(50, 60);
//console.log(sum);

const add4 = (x, y, z) => x + y * z;

const result = add4(2,4,9);
console.log(result);