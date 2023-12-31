module.exports = [
    // ...
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': [
              "'self'",
              'data:',
              'blob:',
              'market-assets.strapi.io',
              'yourBucketName.s3.yourRegion.amazonaws.com',
            ],
            'media-src': [
              "'self'",
              'data:',
              'blob:',
              'market-assets.strapi.io',
              'yourBucketName.s3.yourRegion.amazonaws.com',
            ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    // ...
  ];