/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thumbnail.komiku.id",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
