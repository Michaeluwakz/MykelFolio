
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      // If you have other external image sources in the future, add them here.
      // For example:
      // {
      //   protocol: 'https',
      //   hostname: 'your-cdn.com',
      // },
    ],
  },
};

export default nextConfig;
