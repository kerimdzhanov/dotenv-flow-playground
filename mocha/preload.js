'use strict';

const { printProcessEnv } = require('../utils/print-process-env');

// `dotenv-flow/config` is expected to be preloaded via Mocha's `-r` switch

describe('When preloaded using the mocha -r flag', () => {
  it('should print the process environment variables', () => {
    printProcessEnv();
  })
});
