'use strict'

require("babel-polyfill");
var fetch = require('node-fetch');

async function foo () {
  const google = await fetch('https://www.google.com')
  console.log(google);
}

foo();
