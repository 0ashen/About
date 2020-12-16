import { Head } from '../components/Head'
import { GeneralLayout } from '../components/GeneralLayout/GeneralLayout'
import { withTranslation } from 'next-i18next'


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

export enum PageProjectsNamespaceEnum {
    'common' = 'common',
    'page-projects' = 'page-projects'
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
