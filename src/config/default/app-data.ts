const cdn_url = 'https://res.cloudinary.com/aviabird/image/upload/h_500/v1538842572/aviacommerce/';

export const DEFAULT_APP_DATA = {
  landing_page_banner: [
    {
      image_link: `${cdn_url}banner-1.jpg`,
      link_url: '#'
    },
    {
      image_link: `${cdn_url}banner-2.jpg`,
      link_url: '#'
    },
    {
      image_link: `${cdn_url}banner-4.jpg`,
      link_url: '#'
    },
    {
      image_link: `${cdn_url}banner-5.jpg`,
      link_url: '#'
    },
    {
      image_link: `${cdn_url}banner-6.jpg`,
      link_url: '#'
    }
  ],
  promo_banner: {
    image_link: `${cdn_url}secondary-banner-1.jpg`,
    link_url: '#'
  },
  category_banner: {
    Living: {
      image_link: `${cdn_url}banner-1.jpg`,
      link_url: '#'
    },
    Bedroom: {
      image_link: `${cdn_url}banner-2.jpg`,
      link_url: '#'
    },
    Dining: {
      image_link: `${cdn_url}banner-3.jpg`,
      link_url: '#'
    },
    Study: {
      image_link: `${cdn_url}banner-4.jpg`,
      link_url: '#'
    }
  },
  Deals: {
    type: 'Today\'s Deals'
  },

  footer_page_links: [
    {
      name: 'About Us',
      link_url: '#'
    },
    {
      name: 'Blog',
      link_url: '#'
    },
    {
      name: 'Return Policy',
      link_url: '#'
    },
    {
      name: 'FAQs',
      link_url: '#'
    },
    {
      name: 'Testimonials',
      link_url: '#'
    }
  ],
  footer_social_links: [
    {
      link_url: 'https://twitter.com/aviacommerce',
      name: 'Twitter',
      icon: 'fa fa-twitter-square'
    },
    {
      link_url: 'https://www.instagram.com/aviacommerce/',
      name: 'Instagram',
      icon: 'fa fa-instagram'
    },
    {
      link_url:
        'https://plus.google.com/',
      name: 'Google +',
      icon: 'fa fa-google-plus-square'
    },
    {
      link_url: 'https://in.pinterest.com/aviacommerce/',
      name: 'Pinterest',
      icon: 'fa fa-pinterest-square'
    },
    {
      link_url: 'https://www.facebook.com/aviacommerce/',
      name: 'Facebook',
      icon: 'fa fa-facebook-square'
    },
    {
      link_url: 'https://www.youtube.com/',
      name: 'Youtube',
      icon: 'fa fa-youtube-square'
    }
  ],
  contact_info: {
    contact_no: '888-888-xxx',
    copyright: 'Copyright © 2018 AviaCommerce, Inc.'
  }
};
