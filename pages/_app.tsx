import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { GlobalStyleCommon } from '../styles/common'
import { appWithTranslation } from '../i18n'
import { useState } from 'react'
import { Theme } from '../styles/themes.interface'
import { themes } from '../styles/themes'

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(getDefaultTheme)

    function getDefaultTheme(): Theme {
        if (process.browser && window.matchMedia) {
            // check client browser theme
            const isLight = window.matchMedia('(prefers-color-scheme: light)').matches
            return isLight ? themes.light : themes.dark
        }
        return themes.default
    }

    return (
        <ThemeProvider theme={{ variables: theme, update: setTheme }}>
            <GlobalStyle />
            <GlobalStyleCommon />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
}

export default appWithTranslation(MyApp)
