import Document, {
    DocumentProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ReactNode } from 'react';

interface Cookies {
    cookies: { colorModeSwitched: true | undefined };
}

export default class MyDocument extends Document {
    props: Readonly<DocumentProps> &
        Readonly<{ children?: ReactNode }> &
        Cookies;

    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                cookies: ctx.req.cookies,
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        const { colorModeSwitched = false } = this.props.cookies;
        // noinspection HtmlRequiredTitleElement
        return (
            <Html
                lang={this.props.__NEXT_DATA__.props.initialLanguage}
                data-color-mode-switched={colorModeSwitched}
            >
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
