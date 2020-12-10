export interface NavigationItem {
    href: string
    text: string
    type?: 'external-link' | 'download-file',
    target?: '_blank'
}
