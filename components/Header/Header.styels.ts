import styled from 'styled-components'

// language=SCSS prefix=*{ suffix=}
export const SC_Header = styled.header`
    width: 100%;
    box-sizing: border-box;
    padding-top: 75px;
    padding-left: 150px;
    padding-right: 150px;
    display: flex;
    align-items: flex-start;

`

// language=SCSS prefix=*{ suffix=}
export const SC_SwitchLanguage = styled.button`
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: 28px;

    svg {
      width: 25px;
      height: 25px;
      flex-shrink: 0;
      margin-right: 5px;
    }

    span {
      text-transform: capitalize;
      width: 30px;
      text-align: left;
    }
`

// language=SCSS prefix=*{ suffix=}
export const SC_SwitchTheme = styled.select`

`
