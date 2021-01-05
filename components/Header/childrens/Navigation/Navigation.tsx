import {NavigationItem, NavigationPanel} from './Navigation.styles'
import {route} from './Navigation.interface'
import {Link, withTranslation} from '../../../../i18-next'
import {IconExternalLink} from '../../../../public/static/icons/external-link.icon'
import {IconDownloadLink} from '../../../../public/static/icons/download.icon'
import {useRouter} from "next/router";

export const routes: route[] = [
    {
        href: '/about-skills-contacts',
        text: 'about-skills-contacts',
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
        href: 'https://career.habr.com/0xd58z/print.pdf',
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
        <NavigationPanel>
            <ul>
                {routes.map((item: route, idx: number) => {
                    return (
                        <li key={idx}>
                            <Link href={item.href}>
                                <NavigationItem href={item.href}
                                                className={router.pathname === item.href ? 'is-active-route' : ''}
                                                target={item.target || null}>
                                    {item.type === 'external-link' && <IconExternalLink/>}
                                    {item.type === 'download-file' && <IconDownloadLink/>}
                                    <span>{(item.type == null && '/')}{t(item.text)}</span>
                                </NavigationItem>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </NavigationPanel>
    )
}

export const Navigation = withTranslation('navigation')(NavigationComponent)
