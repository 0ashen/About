import styled from 'styled-components'
// language=SCSS prefix=*{ suffix=}
export const SC_NavigationPanel = styled.nav`
    display: block;
    margin-right: auto;

    ul {
      display: flex;
      align-items: flex-start;

      li {
        margin-right: 30px;
      }
    }
`
// language=SCSS prefix=*{ suffix=}
export const SC_NavigationItem = styled.a`
    display: block;
    position: relative;
    opacity: 0.7;
    transition: opacity 0.1s linear;

    &.is-active-route, &:hover {
      opacity: 1;
    }

    svg {
      width: 20px;
      height: 20px;
      display: inline-block;
      margin-right: 7px;
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
