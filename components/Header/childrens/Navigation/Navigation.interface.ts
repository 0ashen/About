export interface NavigationList extends Array<NavigationItem> {
}

export interface NavigationItem {
    href: string
    text: string
    type?: 'external-link' | 'download-file'
}
