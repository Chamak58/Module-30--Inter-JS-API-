/**
 * for of loop: use on array or string
 * for in loop: use in object
 */


const numbers = [34, 56, 35, 79, 30];
console.log(numbers);
//for loop:
for(let i = 0; i<numbers.length; i++){
    //console.log(i);
}
//while loop

//for of loop:[array looping]
for(const number of numbers){
    //console.log(number);
}

//[string looping]
const raja = 'rai bahadur';
//console.log(raja);
for(const characters of raja){
    console.log(characters);
}


//for in loop[use in object]
const glass = {
    name: 'glass',
    color: 'golden', 
    price: 15,
    isCleaned: true,
}

//object tai for of diye korle error asbe

// for(const key of glass){
//     console.log(key);
// }
// output: --> error asbe.

const keys = Object.keys(glass);
console.log(keys); // tobe keys er man ber kore segulr upor for of chaliye kora jai

for(const key of keys){
    console.log(key);
}

//for in
for(const key in glass){
    const key = Object.keys(glass);
    console.log(key);
}
//output --> 
// [ 'name', 'color', 'price', 'isCleaned' ]
// [ 'name', 'color', 'price', 'isCleaned' ]
// [ 'name', 'color', 'price', 'isCleaned' ]
// [ 'name', 'color', 'price', 'isCleaned' ]

for(const value in glass){
    const value = Object.values(glass);
    console.log(value);
}
// output--> [ 'glass', 'golden', 15, true ]
// [ 'glass', 'golden', 15, true ]
// [ 'glass', 'golden', 15, true ]
// [ 'glass', 'golden', 15, true ]