import { DEFAULT_CONFIG } from '../config/default/default';

export const environment = {
  production: false,
  apiEndpoint: 'http://localhost:3000/',
  // apiEndpoint: DEFAULT_CONFIG.prodApiEndpoint,
  appName: DEFAULT_CONFIG.appName,
  config: DEFAULT_CONFIG
};
