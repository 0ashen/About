// language=SCSS prefix=*{ suffix=}
import styled from "styled-components";

export const SC_SwitchLanguage = styled.button`
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: 28px;

    svg {
      width: 25px;
      height: 25px;
      flex-shrink: 0;
      margin-right: 5px;
    }

    span {
      //text-transform: capitalize;
      width: 30px;
      text-align: left;
    }
`
