import { DEFAULT_APP_DATA } from './app-data';
import { DEFAULT_META_DATA } from './meta-data';

export const DEFAULT_CONFIG = {
  prodApiEndpoint: 'https://aviastore.aviacomapi.com/',
  // prodApiEndpoint: 'http://localhost:3000/',
  frontEndUrl: 'https://demo.aviacommerce.com/',
  appName: 'AviaCommerce Online Shop',
  fevicon: '/assets/default/favicon.ico',
  header: {
    brand: {
      logo: '/assets/default/logo.svg',
      logoPng: 'https://res.cloudinary.com/aviabird/image/upload/h_250/v1539065176/aviacommerce/logo/main.png',
      name: 'AviaCommerce',
      height: '40',
      width: '135'
    },
    searchPlaceholder: 'Search for products',
    showGithubRibon: false
  },
  showDummyCardInfo: true,
  // Following are the test crediantials for payubiz payment gateway.
  payuBizSalt: 'eCwWELxi',
  payuBizKey: 'gtKFFx',
  freeShippingAmount: 50,
  currency_symbol: '$', // USD $
  PaymentMethodCod: 'COD',
  PaymentMethodPayubiz: 'Payubiz',
  defaultPaymentMethod: 'Payubiz',
  reviewsDisplayLimit: 5,

  ...DEFAULT_APP_DATA,
  ...DEFAULT_META_DATA
};
