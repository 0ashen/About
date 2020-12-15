import styled from 'styled-components'
import { COLORS } from '../../../../styles/themes'

export const SC_NavigationPanel = styled.nav`
  display: block;
  margin-right: auto;
  font-family: 'PT Sans Narrow MY';

  ul {
    display: flex;
    align-items: flex-start;

    li {
      margin-right: 30px;
    }
  }
`

export const SC_NavigationItem = styled.a`
  display: block;
  position: relative;
  transition: color 0.1s linear;

  &.is-active-route, &:hover {
    color: var(--${COLORS.general});
  }

  svg {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 7px;
    vertical-align: middle;
    overflow: visible;
    opacity: 0.7;

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
