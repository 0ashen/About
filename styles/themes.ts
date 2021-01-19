export const COLORS = {
    document_background: 'document_background',
    document_text_color: 'document_text_color',
    general: 'general',
    subGeneral: 'subGeneral',
    focus_outline: 'focusOutline',
    selection: 'selection',
}

// language=SCSS prefix=*{ suffix=}
const dark = `
  --${COLORS.document_background}: #181818;
  --${COLORS.document_text_color}: #e0e0e0;
  --${COLORS.general}: #d63d3e;
  --${COLORS.subGeneral}: #ffd569;
  --${COLORS.focus_outline}: #00c647;

  --${COLORS.selection}: #ffbebe;
`
// language=SCSS prefix=*{ suffix=}
const light = `
  --${COLORS.document_background}: #ffffff; 
  --${COLORS.document_text_color}: #161b22;
  --${COLORS.general}: #307bff;
  --${COLORS.subGeneral}: #898989;
  --${COLORS.focus_outline}: #ff6565;

  --${COLORS.selection}: #83b0ff;
`


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
