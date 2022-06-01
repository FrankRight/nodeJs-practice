const { readFile, writeFile } = require("fs");

// reading from an existing file
readFile("./example-folder/first.txt", "utf8", (err, result) => {
  err ? console.log(err) : console.log(result);
  const firstResult = result;

  readFile("./example-folder/second.txt", "utf8", (err, result) => {
    err ? console.log(err) : console.log(result);
    const secondResult = result;

    writeFile(
      "./example-folder/file-async.txt",
      `concatinated the text ${firstResult} and ${secondResult}!`,
      (err, result) => {
        err ? console.log(err) : console.log(result);
      }
    );
  });
});

// writing into a new file
