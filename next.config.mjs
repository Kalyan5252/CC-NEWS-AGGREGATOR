/** @type {import('next').NextConfig} */

// import customLoader from './utils/customLoader';

const nextConfig = {
  images: {
    // loader: customLoader,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
