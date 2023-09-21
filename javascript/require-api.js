'use strict';

const { printProcessEnv } = require('../utils/print-process-env');

// --

const dotenvFlow = require('dotenv-flow');

console.log(
  '\n>> .config(): %O\n',
  dotenvFlow.config({ default_node_env: 'development' }),
  '\n --------------',
); // >>>

// --

printProcessEnv();
