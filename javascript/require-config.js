'use strict';

const { printProcessEnv } = require('../utils/print-process-env');

// --

require('dotenv-flow/config');

// --

printProcessEnv();
