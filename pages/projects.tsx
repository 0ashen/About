import { Head } from '../components/Head'
import { GeneralLayout } from '../components/GeneralLayout/GeneralLayout'
import { withTranslation } from '../i18-next'
import { PageProjectsNamespaceEnum } from '../components/pages/projects/projects-translate-name-space.enum'


function PageProjects({ t }): JSX.Element {
    return (
        <>
            <Head>
                <title>
                    {
                        t('website-tab-title-prefix') +
                        t(`${PageProjectsNamespaceEnum['page-projects']}:tab-title`)
                    }
                </title>
            </Head>
            <GeneralLayout>
                Projects
            </GeneralLayout>
        </>
    )
}


PageProjects.getInitialProps = async () => ({
    namespacesRequired: [
        PageProjectsNamespaceEnum['common'],
        PageProjectsNamespaceEnum['page-projects'],
    ],
})

export default withTranslation(
    [PageProjectsNamespaceEnum['common'],
        PageProjectsNamespaceEnum['page-projects']],
)(PageProjects)
