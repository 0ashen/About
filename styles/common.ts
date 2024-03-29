import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { COLORS, themes } from './themes';

export const FONT_FAMILY = {
  PTSans: 'PT Sans',
  PTSansNarrow: 'PT Sans Narrow',
};

export const GlobalStyleCommon = createGlobalStyle`
  ${normalize}
  ${themes}
  html {
    font-family: ${FONT_FAMILY.PTSans}, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
    //font-family: 'PT Sans', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 18px;
    min-height: 100vh;
  }

  ::selection {
    color: #fff;
    background: var(--${COLORS.selection});
  }

  .disable-animation * {
    &:not(.blink-words):not(.blink-words b), &:before, &:after {
      transition: all 0s !important;
    }
  }

  body {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //height: 100%;
    //min-height: 100%;
    position: relative;
    min-height: 100vh;
    color: var(--${COLORS.document_text_color});
    background-color: var(--${COLORS.document_background});
    transition: color 0.2s ease-out, background 0.2s ease-out;
    min-width: 1200px;

    //&::-webkit-scrollbar {
    //  width: 7px;
    //}
    //
    //&::-webkit-scrollbar-track {
    //  //box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    //}
    //
    //&::-webkit-scrollbar-thumb {
    //  background-color: #fff;
    //  //outline: 1px solid slategrey;
    //}

    &.overflow-hidden {
      overflow: hidden;
      padding-right: 7px;
    }
  }


  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, menu {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    //font-weight: 400;
    //font-size: inherit;
  }

  input {
    border: none;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none !important;
    padding: 0;

    &::-ms-clear {
      display: none;
    }

    //noinspection ALL
    &::-webkit-contacts-auto-fill-button {
      visibility: hidden;
      display: none !important;
      pointer-events: none;
      position: absolute;
      right: 0;
    }

    //noinspection ALL
    &::-webkit-credentials-auto-fill-button {
      visibility: hidden;
      display: none !important;
      pointer-events: none;
      position: absolute;
      right: 0;
    }
  }

  button {
    border: none;
    font-family: inherit;
    padding: 0;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  select {
    border: none;
    background-color: transparent;
    font-family: inherit;
    -webkit-appearance: none;
    padding: 0;
    appearance: none;
    color: inherit;
    cursor: pointer;

    option {
      background-color: inherit;
      color: #000;
    }
  }

  svg {
    max-width: 100%;
    display: block;
  }

  /////////////////////////////////////////
  /////////////////////////////////////////
  /////////////////////////////////////////
  /////////////////////////////////////////
  .disable-hover,
  .disable-hover * {
    pointer-events: none !important;
  }

  .show-center {
    position: relative;

    &:after {
      content: '';
      width: 1px;
      height: 100%;
      display: block;
      position: absolute;
      background: red;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &:before {
      content: '';
      width: 100%;
      height: 1px;
      display: block;
      position: absolute;
      background: red;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  #__bs_notify__ {
    /* Move notification to bottom */
    top: auto !important;
    bottom: 0 !important;
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 0 !important;
  }

  // *:not(.focusable):not(.focusable-inner):focus {
  //       box-shadow: 0 0 0 3px var(--${COLORS.focus_outline});
  //       outline: none;
  // }
  .focusable:focus > .focusable-inner {
    box-shadow: 0 0 0 3px var(--${COLORS.focus_outline});
  }

  .focusable:focus, .focusable-inner:focus {
    outline: none;
  }

`;
