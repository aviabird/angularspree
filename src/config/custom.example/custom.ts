import { CUSTOM_APP_DATA } from './app-data';
import { CUSTOM_META_DATA } from './meta-data';

export const CUSTOM_CONFIG = {
  // Add Your custom configs here
  prodApiEndpoint: 'http://my-prod.api.example.com/',
  appName: 'Custom App Name',
  fevicon: 'https://via.placeholder.com/350x150',
  header: {
    brand: {
      logo: 'https://via.placeholder.com/350x150',
      name: 'Custom',
      height: '40',
      width: '112',
    },
    searchPlaceholder: 'Search',
    showGithubRibon: false,
  },
  // Following are the test crediantials for payubiz payment gateway.
  payuBizSalt: 'eCwWELxi',
  payuBizKey: 'gtKFFx',
  payuBizUrl: 'https://test.payu.in/_payment',
  freeShippingAmount: 10,
  currency_symbol: '$', // USD $
  PaymentMethodCod: 'COD',
  PaymentMethodPayubiz: 'Payubiz',
  defaultPaymentMethod: 'Payubiz',
  reviewsDisplayLimit: 5,

  ...CUSTOM_APP_DATA,
  ...CUSTOM_META_DATA
};
