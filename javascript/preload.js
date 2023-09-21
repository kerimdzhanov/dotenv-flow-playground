'use strict';

const { printProcessEnv } = require('../utils/print-process-env');

// `dotenv-flow/config` is expected to be preloaded via Node's `-r` switch

printProcessEnv();
