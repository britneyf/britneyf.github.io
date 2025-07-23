/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/',
  images: {
    unoptimized: true,
  },
  // If you use a custom domain, set basePath and assetPrefix accordingly
};

export default nextConfig;
