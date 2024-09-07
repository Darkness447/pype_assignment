/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'framerusercontent.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
