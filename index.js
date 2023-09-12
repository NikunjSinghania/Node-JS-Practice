const { add, sub } = require('./sum')
const Hero = require('./Hero')
const data = require('./data.json')

console.log(data.name);

const batman = new Hero('Batman')
console.log(batman.getName());

console.log(add(2342, 232));
// console.log(addFunction(12, 123));

console.log('Hello from INDEX');

