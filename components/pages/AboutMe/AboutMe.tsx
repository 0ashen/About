import Skills from './childrens/Skills/Skills'
import { GeneralLayout } from '../../GeneralLayout/GeneralLayout'


export function AboutMe() {
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