import { Head } from '../../components/Head'
import { GeneralLayout } from '../../components/GeneralLayout/GeneralLayout'
import { withTranslation } from 'next-i18next'


function PageBooks({ t }): JSX.Element {
    return (
        <>
            <Head>
                <title>
                    {
                        t('website-tab-title-prefix') +
                        t(`${PageBooksNamespaceEnum['page-books']}:tab-title`)
                    }
                </title>
            </Head>
            <GeneralLayout>
                Books 1234
            </GeneralLayout>
        </>
    )
}

export enum PageBooksNamespaceEnum {
    'common' = 'common',
    'page-books' = 'page-books'
}

PageBooks.getInitialProps = async () => ({
    namespacesRequired: [
        PageBooksNamespaceEnum['common'],
        PageBooksNamespaceEnum['page-books'],
    ],
})

export default withTranslation([
    PageBooksNamespaceEnum['common'],
    PageBooksNamespaceEnum['page-books'],
])(PageBooks)
