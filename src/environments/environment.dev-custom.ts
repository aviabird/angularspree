import { CUSTOM_EXAMPLE_CONFIG } from '../config/custom.example/custom.example';

export const environment = {
  production: false,
  apiEndpoint: CUSTOM_EXAMPLE_CONFIG.prodApiEndpoint || 'http://localhost:3000/',
  appName: CUSTOM_EXAMPLE_CONFIG.appName,
  config: CUSTOM_EXAMPLE_CONFIG
};
