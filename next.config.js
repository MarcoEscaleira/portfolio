/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'escaleira.dev',
        defaultLocale: 'en-US',
      },
    ],
  }
}
