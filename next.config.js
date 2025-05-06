const path = require('path');
const nextI18NextConfig = require('./src/i18n/next-i18next.config');

module.exports = {
    ...nextI18NextConfig,
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            '@': path.resolve(__dirname, 'src'),
        };
        return config;
    },
};