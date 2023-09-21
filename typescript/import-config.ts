import { printProcessEnv } from '../utils/print-process-env';

// --

/**
 * The following import should fail, since importing
 * "dotenv-flow/config" doesn't work for TS modules.
 */
import('dotenv-flow/config');

// --

printProcessEnv();
