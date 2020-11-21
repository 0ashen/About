const { nextI18NextRewrites } = require('next-i18next/rewrites')
// import { navigationList } from './components/Navigation/Navigation'

const localeSubpaths = {
    ru: 'ru',
    en: 'en'
}

module.exports = {
    // async redirects() {
    //     return [
    //         {
    //             source: '/', // automatically handles all locales
    //             destination: navigationList[0].href, // automatically passes the locale on
    //             permanent: false,
    //         },
    //         {
    //             source: '/ru', // automatically handles all locales
    //             destination: navigationList[0].href, // automatically passes the locale on
    //             permanent: false,
    //         },
    //         {
    //             source: '/en', // automatically handles all locales
    //             destination: navigationList[0].href, // automatically passes the locale on
    //             permanent: false,
    //         },
    //         {
    //             source: '/ru/en', // automatically handles all locales
    //             destination: navigationList[0].href, // automatically passes the locale on
    //             permanent: false,
    //         },
    //         {
    //             source: '/en/ru', // automatically handles all locales
    //             destination: navigationList[0].href, // automatically passes the locale on
    //             permanent: false,
    //         },
    //     ]
    // },
    rewrites: async () => [
        ...nextI18NextRewrites(localeSubpaths),
    ],
    publicRuntimeConfig: {
        localeSubpaths,
    },
}
