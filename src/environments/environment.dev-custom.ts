import { CUSTOM_CONFIG } from '../config/custom';

export const environment = {
  production: false,
  API_ENDPOINT: CUSTOM_CONFIG.ProdApiEndpoint,
  AppName: CUSTOM_CONFIG.AppName,
  config: CUSTOM_CONFIG
};
