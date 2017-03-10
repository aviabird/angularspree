import { environment } from './../environments/environment';

const baseUrl = environment.API_ENDPOINT;

// Function for settting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl(baseUrl);
  RestangularProvider.setDefaultHeaders({ 'Authorization': getAuthToken() });
}

function getAuthToken() {
  return localStorage.getItem('auth-token');
}
