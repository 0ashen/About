import styled from 'styled-components'

// language=SCSS prefix=*{ suffix=}
export const NavigationPanel = styled.nav`
    width: 100%;
    box-sizing: border-box;
    padding-top: 150px;
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
    &:hover {
      text-decoration: underline;
    }
`