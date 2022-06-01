// Modules
// node uses commonJS under the hood.
// Every file is a module by default.

const name1 = "John";
const name2 = "Peter";

const sayHi = (name) => console.log(`Hello there, ${name}`);

sayHi("Susan");
sayHi(name1);
sayHi(name2);
