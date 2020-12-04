import { NavigationList } from './Navigation.interface'

export const routes: NavigationList = [
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
