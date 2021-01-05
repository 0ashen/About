import styled from 'styled-components'
import {COLORS} from '../../../../styles/themes'

export const Toggler = styled.button`
    align-self: center;

    .focusable-inner {
        width: 42px;
        height: 24px;
        border-radius: 3px;
        cursor: pointer;
        align-self: center;
        margin-left: 20px;
        box-sizing: border-box;
        position: relative;
        transition: background-color 0.3s ease-in-out,
            border-color 0.3s ease-in-out;
        border: 3px solid var(--${COLORS.subGeneral});
    }
`

export const Square = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: -5px;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 0;
    left: -5px;
    background-color: var(--${COLORS.general});

    [data-color-mode-switched='true'] & {
        transform: translateX(18px);
    }

    svg {
        display: none;

        &.moon {
            width: 14px;
            height: 13px;
            //color:#fff;
            @media (prefers-color-scheme: light) {
                display: block;
            }
        }

        &.sun {
            width: 20px;
            height: 20px;
            @media (prefers-color-scheme: dark) {
                display: block;
            }
        }
    }
`
