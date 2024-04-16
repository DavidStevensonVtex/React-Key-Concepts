// node object_destructuring.js

const user = { name: 'David', age: 65 } ;
const { name, age } = user ;    // this is object destructuring in action
console.log(`name: ${name}  age: ${age}`);