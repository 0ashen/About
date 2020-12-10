import {SC_NavigationItem, SC_NavigationPanel} from './Navigation.styles'
import {NavigationItem} from './Navigation.interface'
import {Link, withTranslation} from '../../../../i18n'
import {IconExternalLink} from '../../../../public/static/icons/external-link.icon'
import {IconDownloadLink} from '../../../../public/static/icons/download.icon'
import {useRouter} from "next/router";

export const routes: NavigationItem[] = [
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
        target: '_blank'
    },
    {
        href: 'https://github.com/0ashen',
        text: 'github',
        type: 'external-link',
        target: '_blank'
    },
]


function NavigationComponent({t}): JSX.Element {

    const router = useRouter()
    return (
        <SC_NavigationPanel>
            <ul>
                {routes.map((item: NavigationItem, idx: number) => {
                    return (
                        <li key={idx}>
                            <Link href={item.href} >
                                <SC_NavigationItem href={item.href}
                                                   className={router.pathname === item.href ? 'is-active-route' : ''}
                                                   target={item.target || null}>
                                    {item.type === 'external-link' && <IconExternalLink/>}
                                    {item.type === 'download-file' && <IconDownloadLink/>}
                                    <span>{(item.type == null && '/')}{t(item.text)}</span>
                                </SC_NavigationItem>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </SC_NavigationPanel>
    )
}

export const Navigation = withTranslation('navigation')(NavigationComponent)
