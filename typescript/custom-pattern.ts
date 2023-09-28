import { printProcessEnv } from '../utils/print-process-env';

// --

import dotenvFlow, { DotenvFlowConfigOptions } from 'dotenv-flow';

const options: DotenvFlowConfigOptions = {
  path: './custom-pattern',
  pattern: 'config/[node_env/].env[.local]',
  default_node_env: 'development',
  debug: true
};

console.log(
  '\n>> .config(): %O\n',
  dotenvFlow.config(options),
  '\n --------------',
); // >>>

// --

printProcessEnv(options);
