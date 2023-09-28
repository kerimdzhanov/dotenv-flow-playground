'use strict';

const dotenvFlow = require('dotenv-flow');

module.exports = {
  printProcessEnv: function (options = {}) {
    const node_env = (
      options.node_env ||
      process.env.NODE_ENV ||
      options.default_node_env ||
      'development'
    );

    const filenames = dotenvFlow.listFiles({
      node_env,
      path: options.path,
      pattern: options.pattern
    });

    const parsed = dotenvFlow.parse(filenames);

    console.log(''); // >>>

    for (const varname of Object.keys(parsed)) {
      console.log(
        `>> process.env.%s = %s;`,
        varname,
        (typeof process.env[varname] === 'string')
          ? `\x1b[32m'${process.env[varname]}'\x1b[0m`
          : `\x1b[36m${process.env[varname]}\x1b[0m`
      ); // >>>
    }

    console.log('\n --------------\n'); // >>>
  }
};
