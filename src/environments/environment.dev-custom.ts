import { CUSTOM_CONFIG } from '../config/custom';

export const environment = {
  production: false,
  apiEndpoint: "http://localhost:3000/",
  appName: CUSTOM_CONFIG.appName,
  config: CUSTOM_CONFIG
};
