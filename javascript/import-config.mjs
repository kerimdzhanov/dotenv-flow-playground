import { printProcessEnv } from '../utils/print-process-env.js';

// --

/**
 * The following import should fail, since importing
 * "dotenv-flow/config" doesn't work for ES modules.
 */
import('dotenv-flow/config');

// --

printProcessEnv();
