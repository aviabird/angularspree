import { DEFAULT_APP_DATA } from './app-data';

export const DEFAULT_CONFIG = {
  // Add Your custom configs hereh
  prodApiEndpoint: 'http://ngspree-api.herokuapp.com/',
  // prodApiEndpoint: 'http://localhost:3000/',
  appName: 'Angularspree',
  fevicon: 'http://via.placeholder.com/350x150',
  header: {
    brand: {
      logo: '/assets/default/logo.svg',
      name: 'Angularspree',
      height: '42',
      width: '140'
    },
    searchPlaceholder: 'Find good furniture for me',
    showGithubRibon: false
  },
  ...DEFAULT_APP_DATA
};
