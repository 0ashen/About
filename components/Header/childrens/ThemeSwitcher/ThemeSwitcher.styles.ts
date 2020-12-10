import styled from "styled-components";
import {COLORS} from "../../../../styles/themes";

// language=SCSS prefix=*{ suffix=}
export const SC_Toggler = styled.button`
    align-self: center;

    .focusable-inner {
      width: 42px;
      height: 24px;
      border-radius: 24px;
      cursor: pointer;
      align-self: center;
      margin-left: 20px;
      box-sizing: border-box;
      position: relative;
      transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
      background-color: var(--${COLORS.component_theme_switcher_background});
      border: 3px solid var(--${COLORS.component_theme_switcher_border});

    }


`
// language=SCSS prefix=*{ suffix=}
export const SC_Circle = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: -5px;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 0;
    left: -5px;
    background-color: var(--${COLORS.component_theme_switcher_circle});

    [data-color-mode-switched="true"] & {
      transform: translateX(18px);
    }

    svg {
      display: none;

      &.moon {

        width: 14px;
        height: 13px;
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
