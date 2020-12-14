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
                destination: '/about-me-skills-contacts',
                permanent: false,
            },
            {
                source: '/ru',
                destination: '/about-me-skills-contacts',
                permanent: false,
            },
            {
                source: '/en',
                destination: '/about-me-skills-contacts',
                permanent: false,
            },
            {
                source: '/ru/en',
                destination: '/about-me-skills-contacts',
                permanent: false,
            },
            {
                source: '/en/ru',
                destination: '/about-me-skills-contacts',
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
