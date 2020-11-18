import { Item, List, ListLink, NavigationPanel } from './Navigation.styles'
import { NavigationItem, NavigationList } from './Navigation.interface'
import Link from 'next/link'
import { IconExternalLink } from '../../public/assets/icons/external-link.icon'
import { IconDownloadLink } from '../../public/assets/icons/download.icon'


const navigationList: NavigationList = [
    {
        href: '/aboutme-contacts-skills',
        text: 'aboutme-contacts-skills',
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
        href: '/pdf_resume',
        text: 'pdf_resume',
        download: true
    },
    {
        href: 'https://github.com/0ashen',
        text: 'github',
        externalLink: true
    },
]

export function Navigation(): JSX.Element {
    return (
        <NavigationPanel>
            <List>
                {navigationList.map((item: NavigationItem, idx: number) => {
                    return (
                        <Item key={idx}>
                            <Link href={item.href}>
                                <ListLink href={item.href} target={item.externalLink ? '_blank' : ''}>
                                    <span>{ (item.externalLink == null && item.download == null ? '/' : '') + item.text}</span>
                                    {item.externalLink && <IconExternalLink/>}
                                    {item.download && <IconDownloadLink/>}
                                </ListLink>
                            </Link>
                        </Item>
                    )
                })}
            </List>
        </NavigationPanel>
    )
}