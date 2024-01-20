/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            // pathname: '/my-bucket/**',
          },
        ],
      },
};

export default nextConfig;
