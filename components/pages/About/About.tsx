import Skills from './childrens/Skills/Skills';
// noinspection ES6PreferShortImport
import { withTranslation } from '../../../i18-next';
import { PageAboutMeNamespaceEnum } from './about-translate-name-space.enum';
import { WelcomeText, Wrapper } from './About.styles';
import { IconTelegram } from '../../../public/static/icons/telegram.icon';
import { InteractiveJsCanvasDots } from './childrens/InteractiveJsCanvasDots';

function AboutComponent({ t }) {
    const telegramLink = 'https://t.me/james_gandolfini';
    return (
        <Wrapper>
            <WelcomeText>
                <p>{t('greeting')}</p>
                <InteractiveJsCanvasDots />
                <p>{t('greeting__last-sentence')}</p>

                <a href={telegramLink} className={'telegram'} target="_blank">
                    <IconTelegram className={'telegram-icon'} />
                    <span>{t('telegram')}</span>
                </a>
            </WelcomeText>
            <Skills />
        </Wrapper>
    );
}

export const About = withTranslation(
    PageAboutMeNamespaceEnum['page-about-skills-contacts'],
)(AboutComponent);
