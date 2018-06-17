import { CUSTOM_CONFIG } from '../config/custom/custom';

export const environment = {
  production: false,
  apiEndpoint: CUSTOM_CONFIG.prodApiEndpoint || 'http://localhost:3000/',
  appName: CUSTOM_CONFIG.appName,
  config: CUSTOM_CONFIG
};
