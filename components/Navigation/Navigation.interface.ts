export interface NavigationList extends Array<NavigationItem> {
}

export interface NavigationItem {
    href: string
    text: string
    download?: boolean
    externalLink?: boolean
}