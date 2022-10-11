const { argv } = require('node:process');
const { parse, toString } = require('@estilles/expression-parser');

console.log(
  argv.length === 2 ? 'Missing infix expression.' : toString(parse(argv[2]))
);
