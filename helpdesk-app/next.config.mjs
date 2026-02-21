/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/study-projects/helpdesk-app',
    assetPrefix: '/study-projects/helpdesk-app/',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
