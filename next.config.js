const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    ru: 'ru',
    en: 'en'
}

module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/about-me-contacts-skills',
                permanent: false,
            },
            {
                source: '/ru',
                destination: '/about-me-contacts-skills',
                permanent: false,
            },
            {
                source: '/en',
                destination: '/about-me-contacts-skills',
                permanent: false,
            },
            {
                source: '/ru/en',
                destination: '/about-me-contacts-skills',
                permanent: false,
            },
            {
                source: '/en/ru',
                destination: '/about-me-contacts-skills',
                permanent: false,
            },
        ]
    },
    rewrites: async () => [
        ...nextI18NextRewrites(localeSubpaths),
    ],
    publicRuntimeConfig: {
        localeSubpaths,
    },
}
