/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  // images باید مستقیماً در ریشه nextConfig باشد، نه داخل experimental
  images: {
    unoptimized: true,
  },
};

export default nextConfig;