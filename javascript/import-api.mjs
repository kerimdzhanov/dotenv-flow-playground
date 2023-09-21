import { printProcessEnv } from '../utils/print-process-env.js';

// --

import dotenvFlow from 'dotenv-flow';

console.log(
  '\n>> .config(): %O\n',
  dotenvFlow.config({ default_node_env: 'development' }),
  '\n --------------',
); // >>>

// --

printProcessEnv();
