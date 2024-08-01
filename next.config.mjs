/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
};

export default {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint during builds
  },
};
 