/** @type {import('next').NextConfig} */

// const nextConfig = {};
// module.exports = nextConfig;

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

const withImages = require('next-images')
module.exports = withImages({
  inlineImageLimit: false,
  dynamicAssetPrefix: true,
})