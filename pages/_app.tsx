import App from 'next/app'
import {GlobalStyleCommon} from '../styles/common'
import {appWithTranslation} from '../i18n'

function MyApp({Component, pageProps}) {

    return (
        <>
            <GlobalStyleCommon/>
            <Component {...pageProps}/>
        </>
    )
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)
    return {...appProps}
}

export default appWithTranslation(MyApp)
