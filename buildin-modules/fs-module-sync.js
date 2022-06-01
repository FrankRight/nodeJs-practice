const { readFileSync, writeFileSync } = require("fs");

// reading from an existing file
const firstFile = readFileSync("./example-folder/first.txt", "utf8");
const secondFile = readFileSync("./example-folder/second.txt", "utf8");

console.log(firstFile, secondFile); // Hello this is the first file Hello this is the second file.

// writing into a new file
writeFileSync(
  "./example-folder/file-sync.txt",
  `Sync this result ${firstFile} and ${secondFile}`
);

const createdFile = readFileSync("./example-folder/file-sync.txt", "utf8");
console.log(createdFile);

// writing into an existing file
writeFileSync("./example-folder/first.txt", "\nadd content", { flag: "a" });
