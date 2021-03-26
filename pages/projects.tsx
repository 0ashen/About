import { Head } from '../components/Head';
import { GeneralLayout } from '../components/GeneralLayout/GeneralLayout';
import { withTranslation } from '../i18-next';
import { Projects } from '../components/pages/Projects/Projects';
import { PageProjectsNamespaceEnum } from '../components/pages/Projects/projects-translate-name-space.enum';
import { PageAboutMeNamespaceEnum } from '../components/pages/About/about-translate-name-space.enum';

function PageProjects({ t }): JSX.Element {
    return (
        <>
            <Head>
                <title>
                    {t(
                        `${PageProjectsNamespaceEnum['common']}:common-browser-tab-title-prefix`,
                    ) + t('browser-tab-title')}
                </title>
            </Head>
            <GeneralLayout>
                <Projects />
            </GeneralLayout>
        </>
    );
}

PageProjects.getInitialProps = async () => ({
    namespacesRequired: [
        PageProjectsNamespaceEnum['common'],
        PageProjectsNamespaceEnum['page-projects'],
        PageAboutMeNamespaceEnum['navigation'],
    ],
});

export default withTranslation([
    PageProjectsNamespaceEnum['page-projects'],
    PageProjectsNamespaceEnum['common'],
    PageAboutMeNamespaceEnum['navigation'],
])(PageProjects);
