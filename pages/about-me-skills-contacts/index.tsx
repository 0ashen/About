import { Head } from '../../components/Head'
import { GeneralLayout } from '../../components/GeneralLayout/GeneralLayout'
import { withTranslation } from '../../i18n'
import { Skills } from '../../components/Skills/Skills'
import { TFunction } from 'next-i18next'

export interface AboutMeSkillsContactsProps {
    readonly t: TFunction,
    // i18n: I18n,
    // namespacesRequired: NameSpacesEnum[]
}

export enum NameSpacesEnum {
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
                        ' ' +
                        t(`${NameSpacesEnum['page-about-me-skills-contacts']}:tab-title`)
                    }
                </title>
            </Head>
            <GeneralLayout>

                <p>{t(`${NameSpacesEnum['page-about-me-skills-contacts']}:greeting`)}</p>
                <br />
                <p>{t(`${NameSpacesEnum['page-about-me-skills-contacts']}:greeting__last-sentence`)}</p>

                <a href='https://t.me/james_gandolfini'
                   target='_blank'>
                    {t(`${NameSpacesEnum['page-about-me-skills-contacts']}:telegram`)}
                </a>
                <Skills
                    skillsData={t(`${NameSpacesEnum['page-about-me-skills-contacts']}:skills`, { returnObjects: true })} />
            </GeneralLayout>
        </>
    )
}

const namespaces: NameSpacesEnum[] = Object.values(NameSpacesEnum)

AboutMeSkillsContacts.getInitialProps = async () => ({
    namespacesRequired: namespaces,
})

export default withTranslation(namespaces)(AboutMeSkillsContacts)
