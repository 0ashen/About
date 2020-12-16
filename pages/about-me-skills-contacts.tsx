import { Head } from '../components/Head'
import { GeneralLayout } from '../components/GeneralLayout/GeneralLayout'
import Skills from '../components/pages/AboutMe/childrens/Skills/Skills'
import { TFunction } from 'next-i18next'
import { withTranslation } from '../i18-next'
import { PageAboutMeNamespaceEnum } from '../components/pages/AboutMe/about-me-translate-name-space.enum'

function AboutMeSkillsContacts({ t }: { readonly t: TFunction }): JSX.Element {


    return (
        <>
            <Head>
                <title>
                    {
                        t(`${PageAboutMeNamespaceEnum['common']}:website-tab-title-prefix`) +
                        t('tab-title')
                    }
                </title>
            </Head>
            <GeneralLayout>

            </GeneralLayout>
        </>
    )
}


AboutMeSkillsContacts.getInitialProps = async () => ({
    namespacesRequired: [
        PageAboutMeNamespaceEnum['page-about-me-skills-contacts'],
        PageAboutMeNamespaceEnum['common'],
    ],
})

export default withTranslation([
    PageAboutMeNamespaceEnum['page-about-me-skills-contacts'],
    PageAboutMeNamespaceEnum['common'],
])(AboutMeSkillsContacts)
