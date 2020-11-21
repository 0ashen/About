import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { GlobalStyleCommon } from '../styles/common'
import { appWithTranslation } from '../i18n'
import { theme } from '../styles/vars'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <GlobalStyleCommon />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
}

export default appWithTranslation(MyApp)
