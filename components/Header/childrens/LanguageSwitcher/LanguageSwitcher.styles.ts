import styled from 'styled-components';
import { COLORS } from '../../../../styles/themes';

export const SwitchLanguage = styled.div`
    //display: flex;
    //align-items: center;
    white-space: nowrap;
    transition: color 0.1s linear;
    flex-shrink: 0;

    &.is-active-route,
    &:hover {
        color: var(--${COLORS.general});
    }

    svg {
        width: 25px;
        height: 25px;
        margin-right: 5px;
        display: inline-block;
        color: var(--${COLORS.subGeneral});
        //margin-bottom: -2px;
    }

    span {
        //text-transform: capitalize;
        width: 30px;
        text-align: left;
        display: inline-block;
        text-transform: capitalize;
    }
`;
