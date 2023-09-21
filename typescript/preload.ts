import { printProcessEnv } from '../utils/print-process-env';

// `dotenv-flow/config` is expected to be preloaded via ts-node's `-r` switch

printProcessEnv();
