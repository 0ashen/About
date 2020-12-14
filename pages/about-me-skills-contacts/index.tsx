import { Head } from '../../components/Head'
import { GeneralLayout } from '../../components/GeneralLayout/GeneralLayout'
import { withTranslation } from '../../i18n'
import { AboutMeSkillsContactsProps } from './about-me-skills-contacts.interface'
import { NameSpacesEnum } from './about-me-skills-contacts.enum'
import { Skills } from '../../components/Skills/Skills'


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
