import { Head } from '../components/Head'
import { Layout } from '../components/Layout/Layout'
import { withTranslation } from '../i18n'


function PageHomeAboutMe({ t, ...props }): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>{t('website-tab-title-prefix') + ' ' + t('page-about-me-contacts-skills:tab-title')}</title>
            </Head>
            Aboutme/Contacts/Skills
        </Layout>
    )
}

PageHomeAboutMe.getInitialProps = async () => ({
    namespacesRequired: ['common', 'page-about-me-contacts-skills'],
})

export default withTranslation(['common', 'page-about-me-contacts-skills'])(PageHomeAboutMe)
