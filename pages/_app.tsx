import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles/global'
import { GlobalStyleCommon } from '../styles/common'

export default function App({ Component, pageProps }) {
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