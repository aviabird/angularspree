export const APP_DATA = {
  videos: [
    {
      link: 'http://techslides.com/demos/sample-videos/small.webm',
      type: 'video/webm',
      title: 'sample vedio'
    },
    {
      link: 'http://dl3.webmfiles.org/big-buck-bunny_trailer.webm',
      type: 'video/webm',
      title: 'bunny vedio'
    },
    {
      link: 'http://dl3.webmfiles.org/elephants-dream.webm',
      type: 'video/webm',
      title: 'sample vedio'
    }
  ],
  landing_page_banner: [{
    image_link: 'assets/custom/banner/page1.png',
    link_url: '#'
  },
  {
    image_link: 'assets/custom/banner/page2.png',
    link_url: '#'
  }
  ],
  promo_banner: {
    image_link: 'assets/custom/banner/promo/promo.png',
    link_url: '#'
  },
  catgeroy_wise_brands_logo: [{
    // tslint:disable-next-line:max-line-length
    image_link: 'data:image/png;base64,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',
    link_url: '#'
  },
  {
    image_link: 'https://seeklogo.com/images/P/Pedigree-logo-0B0352F571-seeklogo.com.png',
    link_url: '#'
  },
  {
    image_link: 'https://images.template.net/wp-content/uploads/2017/01/21130156/Pet-Food-Logo.jpg',
    link_url: '#'
  },
  {
    image_link: 'http://images-nitrosell-com.akamaized.net/public_html/14/3366/images/dogswell.png',
    link_url: '#'
  }
  ],

  Dog: {
    image_link: 'https://www.what-dog.net/Images/faces2/scroll001.jpg'
  },

  Cat: {
    image_link: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350'
  }
}
