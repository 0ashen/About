import NextHead from 'next/head'


export function Head(props): JSX.Element {
    // const fontBasePath = '/static/fonts'
    const faviconsBasePath = '/static/favs'
    // noinspection SpellCheckingInspection
    return (
        <NextHead>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=PT+Sans+Narrow&display=swap"
                  rel="stylesheet"/>
            {/*<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Sans+Narrow&display=swap" rel="stylesheet" />*/}
            {/*<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>*/}
            {/*<link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"/>*/}
            {/*<style>*/}
            {/*    {`*/}
            {/*        @font-face {*/}
            {/*            font-family: 'PT Sans Narrow MY';*/}
            {/*            src: url('${fontBasePath}/subset-ptsans-narrow.woff2?1') format('woff2'),*/}
            {/*            url('${fontBasePath}/subset-ptsans-narrow.woff?1') format('woff');*/}
            {/*            font-weight: normal;*/}
            {/*            font-style: normal;*/}
            {/*        }*/}
            {/*    `}*/}
            {/*</style>*/}

            <link rel="icon" href={`${faviconsBasePath}/favicon.ico`}/>
            <link rel="apple-touch-icon" sizes="180x180" href={`${faviconsBasePath}/apple-touch-icon.png`}/>
            <link rel="icon" type="image/png" sizes="32x32" href={`${faviconsBasePath}/favicon-32x32.png`}/>
            <link rel="icon" type="image/png" sizes="16x16" href={`${faviconsBasePath}/favicon-16x16.png`}/>
            <link rel="manifest" href={'/site.webmanifest'}/>
            <link rel="mask-icon" href={`${faviconsBasePath}/safari-pinned-tab.svg`} color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
            {props.children}
        </NextHead>
    )
}
