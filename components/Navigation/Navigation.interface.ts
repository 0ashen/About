export interface NavigationList extends Array<NavigationItem> {
}

export interface NavigationItem {
    href: string;
    text: string;
    type?: IsExternalLink
}

export interface IsExternalLink extends Boolean {
}