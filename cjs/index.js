'use strict';

const dotenvFlow = require('dotenv-flow');

console.log(
    '\n>> .config() returns: %O',
    dotenvFlow.config({ default_node_env: 'development' }),
);

console.log('\n ---------\n'); // >>>

console.log(
    '\n>> process.env: %O\n',
    process.env,
);
