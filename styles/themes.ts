import { Theme, Themes } from './themes.interface'

const themeDark: Theme = {
    themeName: 'dark',
    bodyBackgroundColor: '#000',
    bodyTextColor: '#fff',
}

const themeLight: Theme = {
    themeName: 'light',
    bodyBackgroundColor: '#fff',
    bodyTextColor: '#000',
}
//234
export const themes: Themes = {
    default: themeDark,
    light: themeLight,
    dark: themeDark,
    active: null,
}
