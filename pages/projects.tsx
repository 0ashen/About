import { Head } from '../components/Head'
import { GeneralLayout } from '../components/GeneralLayout/GeneralLayout'
import { withTranslation } from '../i18n'


function PageProjects({ t }): JSX.Element {
    return (
        <GeneralLayout>
            <Head>
                <title>{t('website-tab-title-prefix') + ' ' + t('page-projects:tab-title')}</title>
            </Head>
            Projects
        </GeneralLayout>
    )
}

PageProjects.getInitialProps = async () => ({
    namespacesRequired: ['common', 'page-projects'],
})

export default withTranslation(['common', 'page-projects'])(PageProjects)
