import { DEFAULT_APP_DATA } from './app-data';

export const DEFAULT_CONFIG = {
  // Add Your custom configs hereh
  prodApiEndpoint: 'https://ngspree-api.herokuapp.com/',
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
    searchPlaceholder: 'Find good food for me',
    showGithubRibon: false
  },
  // Following are the test crediantials for payubiz payment gateway.
  payuBizSalt: '***REMOVED***',
  payuBizKey: '***REMOVED***',
  payuBizUrl: 'https://test.payu.in/_payment',
  free_shipping_order_amount: 10,
  currency_symbol: '$', //USD $

  ...DEFAULT_APP_DATA
};
