import styled from "styled-components";

// language=SCSS prefix=*{ suffix=}
export const SC_SwitchTheme = styled.select`
    font-size: 28px;
    text-transform: lowercase;
    option {
      @media (prefers-color-scheme: dark) {
        &:nth-child(1):after {
          content: ' system';
        }
      }
      @media (prefers-color-scheme: light) {
        &:nth-child(2):after {
          content: ' asdf222222';
        }
      }
    }
`
