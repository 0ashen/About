import { Head } from '../../components/Head'
import { GeneralLayout } from '../../components/GeneralLayout/GeneralLayout'
import Skills from '../../components/Skills/Skills'
import { TFunction, withTranslation } from 'next-i18next'

export interface AboutMeSkillsContactsProps {
    readonly t: TFunction,
    // i18n: I18n,
    // namespacesRequired: NameSpacesEnum[]
}

export enum PageAboutMeNamespaceEnum {
    'common' = 'common',
    'page-about-me-skills-contacts' = 'page-about-me-skills-contacts'
}

function AboutMeSkillsContacts({ t }: AboutMeSkillsContactsProps): JSX.Element {


    return (
        <>
            <Head>
                <title>
                    {
                        t('website-tab-title-prefix') +
                        t(`${PageAboutMeNamespaceEnum['page-about-me-skills-contacts']}:tab-title`)
                    }
                </title>
            </Head>
            <GeneralLayout>

                <p>{t(`${PageAboutMeNamespaceEnum['page-about-me-skills-contacts']}:greeting`)}</p>
                <br />
                <p>{t(`${PageAboutMeNamespaceEnum['page-about-me-skills-contacts']}:greeting__last-sentence`)}</p>

                <a href='https://t.me/james_gandolfini'
                   target='_blank'>
                    {t(`${PageAboutMeNamespaceEnum['page-about-me-skills-contacts']}:telegram`)}
                </a>
                <Skills />
            </GeneralLayout>
        </>
    )
}

AboutMeSkillsContacts.getInitialProps = async () => ({
    namespacesRequired: [
        PageAboutMeNamespaceEnum['common'],
        PageAboutMeNamespaceEnum['page-about-me-skills-contacts'],
    ],
})

export default withTranslation([
    PageAboutMeNamespaceEnum['common'],
    PageAboutMeNamespaceEnum['page-about-me-skills-contacts'],
])(AboutMeSkillsContacts)
