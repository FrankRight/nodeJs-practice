const { createServer } = require("http");

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<div>Yes!! My first node server Homepage</div>`);
    res.end();
  } else if (req.url === "/about") {
    res.write(
      `<div> <h1>About page</h1> <p>Yes!! My first node server</p></div>`
    );
    res.end();
  } else {
    res.end(`
        <div>
            <h1> Error!! </h1>
            <p>No such page! </p>

            <a href="/">go back Home<a>
        </div>
  `);
  }
});

server.listen(5100);
