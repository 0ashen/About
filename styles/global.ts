import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const theme = {
    colors: {
        primary: '#0070f3',
    },
}


export const GlobalStyle = createGlobalStyle`
  ${normalize}
`

