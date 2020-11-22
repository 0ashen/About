export interface Theme {
    themeName: string;
    bodyBackgroundColor: string,
    bodyTextColor: string,
}
export interface Themes {
    default: Theme,
    light: Theme,
    dark: Theme,
    active: null | Theme
}

const themeDark: Theme = {
    themeName: 'dark',
    bodyBackgroundColor: '#000',
    bodyTextColor: '#fff'
}

const themeLight: Theme = {
    themeName: 'light',
    bodyBackgroundColor: '#fff',
    bodyTextColor: '#000',
}

export const themes: Themes = {
    default: themeDark,
    light: themeLight,
    dark: themeDark,
    active: null
}
