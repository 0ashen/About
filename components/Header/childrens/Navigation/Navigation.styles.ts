import styled from 'styled-components'
import {COLORS} from '../../../../styles/themes'

export const NavigationPanel = styled.nav`
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
export const NavigationItem = styled.a`
    display: block;
    position: relative;
    transition: color 0.1s linear;

    &.is-active-route,
    &:hover {
        color: var(--${COLORS.general});
    }

    svg {
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 7px;
        vertical-align: middle;
        overflow: visible;
        color: var(--${COLORS.subGeneral});

        .arrow-external-link {
            transition: transform 0.2s ease;
        }

        .arrow-download-link {
            transition: transform 0.2s ease;
        }
    }

    &:hover svg .arrow-external-link {
        transform: translate(3px, -3px);
    }

    &:hover svg .arrow-download-link {
        transform: translate(0px, 4px);
    }

    span {
    }
`
