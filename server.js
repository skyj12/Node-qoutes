"use strict";

const http = require("http");
const facts = require("./facts");

http.createServer((request, response) => {
  let newfacts = facts[Math.floor(Math.random()*facts.length)];
  response.writeHead(200, {
    "Content-type": "text/plain"
  });
  response.write(`Surprising Things You Didn't Know About M.A.C.
  "${newfacts.facts}"`)
  response.end();
}).listen(3000);