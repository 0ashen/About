import {Head} from '../../components/Head'
import {Layout} from '../../components/Layout/Layout'
import {withTranslation} from '../../i18n'


function PageBooks({t}): JSX.Element {
    return (
        <>
            <Head>
                <title>{t('website-tab-title-prefix') + ' ' + t('page-books:tab-title')}</title>
            </Head>
            <Layout>
                Books 1234
            </Layout>
        </>
    )
}

PageBooks.getInitialProps = async () => ({
    namespacesRequired: ['common', 'page-books'],
})

export default withTranslation(['common', 'page-books'])(PageBooks)
