/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'framerusercontent.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'cdn.swell.store',
                port: '',
            },
        ],
    },
    env: {
        SWELL_PUBLIC_KEY: 'pk_test_RHKN7DKhDFsyIRjY0jrfh0Lr2Mju2C2b',
    },
};

export default nextConfig;
