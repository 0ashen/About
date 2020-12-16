import { Head } from '../components/Head'
import { GeneralLayout } from '../components/GeneralLayout/GeneralLayout'
import { withTranslation } from '../i18-next'
import { PageBooksNamespaceEnum } from '../components/pages/books/books-translate-name-space.enum'


function PageBooks({ t }): JSX.Element {
    return (
        <>
            <Head>
                <title>
                    {
                        t(`${PageBooksNamespaceEnum['common']}:website-tab-title-prefix`) +
                        t('tab-title')
                    }
                </title>
            </Head>
            <GeneralLayout>
                Books 1234
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
