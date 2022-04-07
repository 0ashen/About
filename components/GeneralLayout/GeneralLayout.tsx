import {
  Inner,
  SC_copyRights,
  SC_mainWrapper,
  Wrapper,
} from './GeneralLayout.styles';
import { Header } from '../Header/Header';
import React from 'react';

export function GeneralLayout(props): JSX.Element {
  return (
    <Wrapper>
      <Inner>
        <Header />
        <SC_mainWrapper>{props.children}</SC_mainWrapper>
        <SC_copyRights>© 2016 – ...</SC_copyRights>
      </Inner>
    </Wrapper>
  );
}
