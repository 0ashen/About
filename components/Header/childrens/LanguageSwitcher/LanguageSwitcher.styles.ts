import styled from 'styled-components'
import { COLORS } from '../../../../styles/themes'

export const SC_SwitchLanguage = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding-left: 10px;
  transition: color 0.1s linear;

  &.is-active-route, &:hover {
    color: var(--${COLORS.general});
  }

  svg {
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    margin-right: 5px;
    opacity: 0.7;
  }

  span {
    //text-transform: capitalize;
    width: 30px;
    text-align: left;
  }
`
