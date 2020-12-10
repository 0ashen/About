import NextHead from 'next/head'


export function Head(props): JSX.Element {
    // noinspection SpellCheckingInspection
    return (
        <NextHead>
            <link rel="icon" href={"/favs/favicon.ico"} />
            <link rel="apple-touch-icon" sizes="180x180" href={'/favs/apple-touch-icon.png'} />
            <link rel="icon" type="image/png" sizes="32x32" href={'/favs/favicon-32x32.png'} />
            <link rel="icon" type="image/png" sizes="16x16" href={'/favs/favicon-16x16.png'} />
            <link rel="manifest" href={'/site.webmanifest'} />
            <link rel="mask-icon" href={'/favs/safari-pinned-tab.svg'} color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="preload" href={'/fonts/subset-ptsans-narrow.woff2?1'} as="font" crossOrigin="" />
            <style>
                {`
                    @font-face {
                        font-family: 'PT Sans Narrow MY';
                        src: url('/fonts/subset-ptsans-narrow.woff2?1') format('woff2'),
                        url('/fonts/subset-ptsans-narrow.woff?1') format('woff');
                        font-weight: normal;
                        font-style: normal;
                    }
                `}
            </style>
            {/*<link rel="preconnect" href="https://fonts.gstatic.com" />*/}
            {/*<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Sans+Narrow&display=swap" rel="stylesheet" />*/}
            {props.children}
        </NextHead>
    )
}
