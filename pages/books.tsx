import { Head } from '../components/Head'
import { Layout } from '../components/Layout/Layout'
import { withTranslation } from '../i18n'


function PageBooks({ t }): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>{t('website-tab-title-prefix') + ' ' + t('page-books:tab-title')}</title>
            </Head>
            Books
        </Layout>
    )
}

PageBooks.getInitialProps = async () => ({
    namespacesRequired: ['common', 'page-books'],
})

export default withTranslation(['common', 'page-books'])(PageBooks)
