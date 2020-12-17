import Skills from './childrens/Skills/Skills'
import { withTranslation } from '../../../i18-next'
import { PageAboutMeNamespaceEnum } from './about-translate-name-space.enum'


function AboutComponent({ t }) {
    const telegramLink = 'https://t.me/james_gandolfini'
    return (
        <>

            <p>
                {
                    t('greeting')
                }
            </p>
            <br />
            <p>
                {
                    t('greeting__last-sentence')
                }
            </p>

            <a href={telegramLink}
               target='_blank'>
                {
                    t('telegram')
                }
            </a>
            <Skills />
        </>
    )
}

export const About = withTranslation(
    PageAboutMeNamespaceEnum['page-about-skills-contacts'],
)(AboutComponent)