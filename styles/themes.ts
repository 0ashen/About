export const COLORS = {
    document_background: 'document_background',
    document_text_color: 'document_text_color',
    general: 'general',
    subGeneral: 'subGeneral',
    focus_outline: 'focusOutline',
    component_theme_switcher_circle: 'component_theme_switcher_circle',
    component_theme_switcher_border: 'component_theme_switcher_border',
    component_theme_switcher_background: 'component_theme_switcher_background',
    selection: 'selection',
}

// language=SCSS prefix=*{ suffix=}
const dark = `
  --${COLORS.document_background}: #181818;
  --${COLORS.document_text_color}: #e0e0e0;
  --${COLORS.general}: #d63d3e;
  --${COLORS.subGeneral}: #898989;
  --${COLORS.focus_outline}: #00c647;

  --${COLORS.component_theme_switcher_circle}: var(--${COLORS.general});
  --${COLORS.component_theme_switcher_border}: var(--${COLORS.subGeneral});
  --${COLORS.component_theme_switcher_background}: transparent;

  --${COLORS.selection}: #ffbebe;
`
// language=SCSS prefix=*{ suffix=}
const light = `
  --${COLORS.document_background}: #ffffff;
  --${COLORS.document_text_color}: #161b22;
  --${COLORS.general}: #307bff;
  --${COLORS.subGeneral}: #898989;
  --${COLORS.focus_outline}: #ff6565;

  --${COLORS.component_theme_switcher_circle}: #2f363d;
  --${COLORS.component_theme_switcher_border}: #d1d5da;
  --${COLORS.component_theme_switcher_background}: transparent;

  --${COLORS.selection}: #83b0ff;
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
