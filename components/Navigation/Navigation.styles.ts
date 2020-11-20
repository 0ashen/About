import styled from 'styled-components'

// language=SCSS prefix=*{ suffix=}
export const NavigationPanel = styled.nav`
    width: 100%;
    box-sizing: border-box;
    padding-top: 75px;
    padding-left: 150px;
`

// language=SCSS prefix=*{ suffix=}
export const List = styled.ul`
    width: 100%;
    display: flex;
    align-items: flex-start;
`
// language=SCSS prefix=*{ suffix=}
export const Item = styled.li`
    margin-right: 30px;
`
// language=SCSS prefix=*{ suffix=}
export const ListLink = styled.a`
    display: block;
    font-size: 28px;
    position: relative;
    
    svg {
      width: 20px;
      height: 20px;
      display: inline-block;
      margin-right: 4px;
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