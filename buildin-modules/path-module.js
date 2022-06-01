const path = require("path");

console.log(path); // everything that includes path is printed

console.log(path.sep); // /
console.log(path.delimiter); // :

// path.join
const singleFileName = path.join("os-module.js");
console.log(singleFileName); // os-module.js

const fileName = path.join("example-folder", "subfolder", "text.txt");
console.log(fileName); // example-folder/subfolder/text.txt

// path.basename
const base = path.basename(fileName);
console.log(base); // text.txt

// path.resolve - adds the parent path to a specific child path.
const absolutePath = path.resolve("example-folder", "subfolder", "text.txt");
// or
// const absolutePath = path.resolve(fileName);

console.log(absolutePath); // /home/frank/practice/nodeJs/buildin-modules/example-folder/subfolder/text.txt
