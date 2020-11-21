import { SC_Item, SC_List, SC_ListLink, SC_NavigationPanel, SC_SwitchLanguage } from './Navigation.styles'
import { NavigationItem, NavigationList } from './Navigation.interface'
import { IconExternalLink } from '../../public/static/icons/external-link.icon'
import { IconDownloadLink } from '../../public/static/icons/download.icon'
import { Link, withTranslation } from '../../i18n'
import { IconGoogleTranslate } from '../../public/static/icons/google-translate.icon'

export const navigationList: NavigationList = [
    {
        href: '/about-me-contacts-skills',
        text: 'about-me-contacts-skills',
    },
    {
        href: '/books',
        text: 'books',
    },
    {
        href: '/projects',
        text: 'projects',
    },
    {
        href: '/pdf-resume',
        text: 'pdf-resume',
        type: 'download-file',
    },
    {
        href: 'https://github.com/0ashen',
        text: 'github',
        type: 'external-link',
    },
]

function NavigationComponent({ t, i18n}): JSX.Element {
    console.log()
    return (
        <SC_NavigationPanel>
            <SC_List>
                {navigationList.map((item: NavigationItem, idx: number) => {
                    return (
                        <SC_Item key={idx}>
                            <Link href={item.href}>
                                <SC_ListLink href={item.href}
                                             target={item.type === 'download-file' ? '_blank' : ''}>
                                    {item.type === 'external-link' && <IconExternalLink />}
                                    {item.type === 'download-file' && <IconDownloadLink />}
                                    <span>{(item.type == null && '/')}{t(item.text)}</span>
                                </SC_ListLink>
                            </Link>
                        </SC_Item>
                    )
                })}
            </SC_List>
            <SC_SwitchLanguage
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}
            >
                <IconGoogleTranslate />
                {/*// @ts-ignore*/}
                <span>{i18n.options.allLanguages.filter(el => el !== (i18n.language || i18n.options.defaultLanguage))}</span>
            </SC_SwitchLanguage>
        </SC_NavigationPanel>
    )
}

export const Navigation = withTranslation('navigation')(NavigationComponent)
