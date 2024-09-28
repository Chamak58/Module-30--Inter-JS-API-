const glass = {
    name: 'glass',
    color: 'golden', // --> property/keys: name, color, price, isCleaned
    
    price: 15,
    isCleaned: true,
}
console.log(glass);


const keys = Object.keys(glass);
console.log(keys);
//output--> [ 'name', 'color', 'price', 'isCleaned' ]


const values = Object.values(glass);// --> value: glass, golden, 15, true
console.log(values);
//output --> [ 'glass', 'golden', 15, true ]

//array of array / two dimensional array
const pair = Object.entries(glass);
console.log(pair);
// output -->  
[
    [ 'name', 'glass' ],
    [ 'color', 'golden' ],
    [ 'price', 15 ],
    [ 'isCleaned', true ]
  ]

  //delete
  delete glass.isCleaned;
  console.log(glass);
  // output --> { name: 'glass', color: 'golden', price: 15 }

  //destructuring delete:
  const {isCleaned, ...rest} = glass;
  console.log(rest);
  // output --> { name: 'glass', color: 'golden', price: 15 }


//freeze: function name k freeze korle , ei object er kono property/value change/remove kra jai na

//Object.freeze(glass); [hide kore rakle property/value change/remove kra jai]
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
//console.log(glass);
//output -->{ color: 'golden', price: 5000, source: 'Bangladesh' }


//seal[modify kore dei . means add hole add, change hole change kore dei]
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);
//output --> { color: 'golden', price: 5000, source: 'Bangladesh' }