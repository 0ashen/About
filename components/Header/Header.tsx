import { SC_Header, SC_SwitchLanguage, SC_SwitchTheme } from './Header.styels'
import { Navigation } from './childrens/Navigation/Navigation'
import { IconGoogleTranslate } from '../../public/static/icons/google-translate.icon'
import { withTranslation } from '../../i18n'
import { ThemeConsumer } from 'styled-components'
import { themeDark, themeLight } from '../../styles/themes'


function HeaderComponent({ i18n }) {
    return (
        <SC_Header>
            <Navigation />
            <SC_SwitchLanguage
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}
            >
                <IconGoogleTranslate />
                <span>{i18n.options.allLanguages.filter(el => el !== (i18n.language || i18n.options.defaultLanguage))}</span>
            </SC_SwitchLanguage>
            <SC_SwitchTheme>
                <option value="system">system</option>
                <option value="dark">dark</option>
                <option value="light">light</option>
            </SC_SwitchTheme>
            <ThemeConsumer>
                {(props) => <div
                    onClick={() => props.update(props.variables.themeName === 'light' ? themeDark : themeLight)}>switch
                    theme.</div>}
            </ThemeConsumer>
        </SC_Header>
    )
}

// window.matchMedia('(prefers-color-scheme: light)')
export const Header = withTranslation('common')(HeaderComponent)
