var fetch = require('node-fetch');
require('babel-polyfill');


async function foo () {
  const google = await fetch('https://www.google.com')
  console.log(google.json());
}
