/** @type {import('next').NextConfig} */

const nextConfig = {
   experimental: {
      serverActions: {
         bodySizeLimit: '20mb',
      },
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: process.env.ARVAN_STORAGE_BASE_URL,
         },
      ],
   },
};
module.exports = nextConfig;

// const withImages = require('next-images');
// module.exports = withImages({
//    inlineImageLimit: false
// });

// const nextConfig = {
//     reactStrictMode: true,
//     compiler: {
//        styledComponents: true,
//     },
//     experimental: {
//        serverActions: true,
//        serverComponentsExternalPackages: ['mongoose'],
//     },
//  };
//  module.exports = nextConfig;

//  const withImages = require('next-images');
//  module.exports = withImages({});
