const random = Symbol('random'); // local
const randy = Symbol.for('predefined'); // global

console.log(random);
console.log(randy);

console.log(Symbol.keyFor(random)); // undefined
console.log(Symbol.keyFor(randy)); // predefined

const myObj = {};
myObj[randy] = 'face';
console.log(myObj) // { [Symbol(predefined)]: 'face' }

