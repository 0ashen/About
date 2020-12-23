import { Head } from '../components/Head'
import { GeneralLayout } from '../components/GeneralLayout/GeneralLayout'
import { withTranslation } from '../i18-next'
import { PageBooksNamespaceEnum } from '../components/pages/Books/books-translate-name-space.enum'
import { Books } from '../components/pages/Books/Books'

function PageBooks({ t }): JSX.Element {
    return (
        <>
            <Head>
                <title>
                    {t(
                        `${PageBooksNamespaceEnum['common']}:common-browser-tab-title-prefix`
                    ) + t('browser-tab-title')}
                </title>
            </Head>
            <GeneralLayout>
                <Books />
            </GeneralLayout>
        </>
    )
}

PageBooks.getInitialProps = async () => ({
    namespacesRequired: [
        PageBooksNamespaceEnum['common'],
        PageBooksNamespaceEnum['page-books'],
    ],
})

export default withTranslation([
    PageBooksNamespaceEnum['page-books'],
    PageBooksNamespaceEnum['common'],
])(PageBooks)
