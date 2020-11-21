import styled from 'styled-components'

// language=SCSS prefix=*{ suffix=}
export const SC_NavigationPanel = styled.nav`
    width: 100%;
    box-sizing: border-box; 
    padding-top: 75px;
    padding-left: 150px;
    padding-right: 150px;
    display: flex; 
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
`

// language=SCSS prefix=*{ suffix=}
export const SC_List = styled.ul`
    display: flex;
    align-items: flex-start;
`

// language=SCSS prefix=*{ suffix=}
export const SC_Item = styled.li`
    margin-right: 30px;
`

// language=SCSS prefix=*{ suffix=}
export const SC_ListLink = styled.a`
    display: block;
    font-size: 28px;
    position: relative;
    
    svg {
      width: 20px;
      height: 20px;
      display: inline-block;
      margin-right: 2px;
      vertical-align: middle;
      overflow: visible;
      .arrow-external-link {
        transition: transform 0.2s ease;
      }
      .arrow-download-link {
        transition: transform 0.2s ease;
      }
    }
    &:hover svg .arrow-download-link {
      transform: translate(0px, 4px)
    }
    &:hover svg .arrow-external-link {
      transform: translate(3px, -3px)
    }

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
      margin-right: 2px;
    }
    span {
      text-transform: capitalize;
      width: 30px;
      text-align: left;
    }
`
