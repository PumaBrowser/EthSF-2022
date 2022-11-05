/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const headers = [{ key: 'Cache-Control', value: 'public, max-age=3600' }];

module.exports = withBundleAnalyzer(
  {
    reactStrictMode: false,
    trailingSlash: false,
    experimental: {
      scrollRestoration: true,
      newNextLinkBehavior: true
    },
    async rewrites() {
      return [];
    },
    async redirects() {
      return [
        {
          source: '/discord',
          destination: 'https://discord.com/invite/Ds5R6yWw',
          permanent: true
        }
      ];
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'X-Frame-Options', value: 'DENY' },
            { key: 'X-XSS-Protection', value: '1; mode=block' },
            { key: 'Referrer-Policy', value: 'strict-origin' },
            { key: 'Permissions-Policy', value: 'interest-cohort=()' }
          ]
        },
        { source: '/about', headers },
        { source: '/privacy', headers },
        { source: '/thanks', headers }
      ];
    }
  },
  { silent: true } // Sentry config
);
