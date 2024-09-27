//default --> if value is not provided , take this as a default

function add(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

//const sum = add(5,7); right
//const sum = add(5); //wrong


//parameter jodi number er value hoy , taile default value hisebe +/- er jonno 0, */vag er jonno 1 set korte hoy
function add(num1 = 55, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
};

//const sum = add(6,); //default value hisebe num2 er man 0 nibe

const sum = add(8); //value diye call korle , defauit vake ta kaj dibe na 



//parameter jodi string er value hoy , taile default value '' er modde set korte hoy
function fullName(first, last = 'Saha'){
    const full = first + ' ' + last;            
    console.log(full);          
    return full;
};
const name = fullName('Chamak', );


//parameter jodi array er value hoy , taile default value [] er modde set korte hoy
function friends(numbs = []){
    
};


//parameter jodi object er value hoy , taile default value {} er modde set korte hoy
function person(human = {}){

};



