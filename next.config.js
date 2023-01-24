/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    remotePatterns : [
      {
        protocol : 'https',
        hostname : 'cdn.pixabay.com',
        port : '',
        pathname : '/photo/2015/04/23/22/00/tree-736885__480.jpg'
      }
    ]
    
  }
};

module.exports = nextConfig;
