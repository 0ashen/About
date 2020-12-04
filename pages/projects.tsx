import { Head } from '../components/Head'
import { Layout } from '../components/Layout/Layout'
import { withTranslation } from '../i18n'


function PageProjects({ t }): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>{t('website-tab-title-prefix') + ' ' + t('page-projects:tab-title')}</title>
            </Head>
            Projects
        </Layout>
    )
}

PageProjects.getInitialProps = async () => ({
    namespacesRequired: ['common', 'page-projects'],
})

export default withTranslation(['common', 'page-projects'])(PageProjects)
