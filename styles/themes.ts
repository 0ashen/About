export const PaletteCSSVars = {
    document_background: 'document_background',
    document_text_color: 'document_text_color',
}

// language=SCSS prefix=*{ suffix=}
const dark = `
    --${PaletteCSSVars.document_background}: #101010;
    --${PaletteCSSVars.document_text_color}: #fff;
`

// language=SCSS prefix=*{ suffix=}
const light = `
    --${PaletteCSSVars.document_background}: #ffffff;
    --${PaletteCSSVars.document_text_color}: #000;
`

// language=SCSS prefix=*{ suffix=}
export const themes = `
    :root {
        ${dark}
    
        @media (prefers-color-scheme: dark) {
          ${dark}
        }
    
        @media (prefers-color-scheme: light) {
          ${light}
        }
    }
    .theme-dark:root {
      ${dark}
    }
    
    .theme-light:root {
      ${light}
    }
`
