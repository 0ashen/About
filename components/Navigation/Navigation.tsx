import { Item, List, ListLink, NavigationPanel } from './Navigation.styles'
import { NavigationItem, NavigationList } from './Navigation.interface'
import Link from 'next/link'


const navigationList: NavigationList = [
    {
        href: '/',
        text: '/aboutme-contacts-skills',
    },
    {
        href: '/books',
        text: '/books',
    },
    {
        href: '/projects',
        text: '/projects',
    },
    {
        href: '/pdf_resume',
        text: '/pdf_resume',
    },
    {
        href: '/github',
        text: '/github',
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
                                <ListLink href={item.href}>{item.text}</ListLink>
                            </Link>
                        </Item>
                    )
                })}
            </List>
        </NavigationPanel>
    )
}