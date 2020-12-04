export interface Theme {
    themeName: string;
    bodyBackgroundColor: string,
    bodyTextColor: string,
}

export interface Themes {
    default: Theme,
    light: Theme,
    dark: Theme,
    active: Theme
}
