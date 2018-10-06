import { DEFAULT_APP_DATA } from './app-data';
import { DEFAULT_META_DATA } from './meta-data';

export const DEFAULT_CONFIG = {
  prodApiEndpoint: 'https://api.aviacommerce.org/',
  // prodApiEndpoint: 'http://localhost:3000/',
  frontEndUrl: 'https://test-aviacommerce.netlify.com/',
  appName: 'Angularspree',
  fevicon: '/assets/default/favicon.ico',
  header: {
    brand: {
      logo: '/assets/default/logo.svg',
      name: 'Angularspree',
      height: '42',
      width: '140'
    },
    searchPlaceholder: 'Search for products',
    showGithubRibon: false
  },
  showDummyCardInfo: true,
  // Following are the test crediantials for payubiz payment gateway.
  payuBizSalt: '***REMOVED***',
  payuBizKey: '***REMOVED***',
  freeShippingAmount: 50,
  currency_symbol: '$', // USD $
  PaymentMethodCod: 'COD',
  PaymentMethodPayubiz: 'Payubiz',
  defaultPaymentMethod: 'Payubiz',
  reviewsDisplayLimit: 5,

  ...DEFAULT_APP_DATA,
  ...DEFAULT_META_DATA
};
