export const COLORS = {
    document_background: 'document_background',
    document_text_color: 'document_text_color',
    red: 'red',
    focus_outline: 'focusOutline',
    component_theme_switcher_circle: 'component_theme_switcher_circle',
    component_theme_switcher_border: 'component_theme_switcher_border',
    component_theme_switcher_background: 'component_theme_switcher_background',
}

// language=SCSS prefix=*{ suffix=}
const dark = `
    --${COLORS.document_background}: #161b22;
    --${COLORS.document_text_color}: #fff;
    --${COLORS.red}: #ff3f40;
    --${COLORS.focus_outline}: #00c647;
    --${COLORS.component_theme_switcher_circle}: #6e40c9;
    --${COLORS.component_theme_switcher_border}: #3c1e70;
    --${COLORS.component_theme_switcher_background}: #271052;
`
// language=SCSS prefix=*{ suffix=}
const light = `
    --${COLORS.document_background}: #ffffff;
    --${COLORS.document_text_color}: #161b22;
    --${COLORS.red}: #ff3f40;
    --${COLORS.focus_outline}: #ff6565;
    --${COLORS.component_theme_switcher_circle}: #2f363d;
    --${COLORS.component_theme_switcher_border}: #d1d5da;
    --${COLORS.component_theme_switcher_background}: transparent;
`

//// language=SCSS prefix=*{ suffix=}
export const themes = `
    :root {
        color-scheme: dark;
        ${dark}
        @media (prefers-color-scheme: light) {
          color-scheme: light;
          ${light}
        }
    }
    [data-color-mode-switched='true'] {
        @media (prefers-color-scheme: light) {
            color-scheme: dark;
            ${dark}
        }
        @media (prefers-color-scheme: dark) {
            color-scheme: light;
            ${light}
        }
    }
`
